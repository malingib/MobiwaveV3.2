// This script checks all routes and links in the application
// Run with: node scripts/check-routes.js

const fs = require("fs")
const path = require("path")
const { promisify } = require("util")
const readdir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)
const stat = promisify(fs.stat)

// Define the root directory
const rootDir = path.resolve(__dirname, "..")

// Define the app directory
const appDir = path.join(rootDir, "app")

// Define the components directory
const componentsDir = path.join(rootDir, "components")

// Track all routes and links
const routes = new Set()
const links = new Set()
const missingRoutes = new Set()

// Function to recursively get all files in a directory
async function getFiles(dir) {
  const subdirs = await readdir(dir)
  const files = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir)
      return (await stat(res)).isDirectory() ? getFiles(res) : res
    }),
  )
  return files.flat()
}

// Function to extract routes from the app directory
async function extractRoutes() {
  console.log("Extracting routes from app directory...")

  const files = await getFiles(appDir)

  for (const file of files) {
    if (file.endsWith("page.tsx") || file.endsWith("page.jsx")) {
      const relativePath = file.replace(appDir, "").replace(/\\/g, "/")
      const route = relativePath.replace(/\/page\.(tsx|jsx)$/, "").replace(/\/$$.*?$$/g, "") // Remove route groups

      routes.add(route || "/")
    }
  }

  console.log(`Found ${routes.size} routes:`)
  console.log([...routes].sort().join("\n"))
}

// Function to extract links from components
async function extractLinks() {
  console.log("\nExtracting links from components...")

  const files = await getFiles(componentsDir)
  const appFiles = await getFiles(appDir)

  const allFiles = [...files, ...appFiles]

  for (const file of allFiles) {
    if (file.endsWith(".tsx") || file.endsWith(".jsx")) {
      const content = await readFile(file, "utf8")

      // Extract links from Link components
      const linkMatches = content.match(/href=["']([^"']+)["']/g) || []

      for (const match of linkMatches) {
        const link = match.match(/href=["']([^"']+)["']/)[1]

        // Only consider internal links
        if (link.startsWith("/")) {
          links.add(link)
        }
      }
    }
  }

  console.log(`Found ${links.size} internal links:`)
  console.log([...links].sort().join("\n"))
}

// Function to check for missing routes
function checkMissingRoutes() {
  console.log("\nChecking for missing routes...")

  for (const link of links) {
    // Skip external links and anchor links
    if (!link.startsWith("/") || link.includes("#")) continue

    // Check if the route exists
    if (!routes.has(link)) {
      missingRoutes.add(link)
    }
  }

  if (missingRoutes.size > 0) {
    console.log(`Found ${missingRoutes.size} missing routes:`)
    console.log([...missingRoutes].sort().join("\n"))
  } else {
    console.log("All links have corresponding routes!")
  }
}

// Main function
async function main() {
  try {
    await extractRoutes()
    await extractLinks()
    checkMissingRoutes()
  } catch (error) {
    console.error("Error:", error)
  }
}

main()
