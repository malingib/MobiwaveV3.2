import type { MetadataRoute } from "next"

const siteUrl = "https://mobiwave.co.ke"

const routes = [
  "/",
  "/about",
  "/contact",
  "/pricing",
  "/services",
  "/services/bulk-sms",
  "/services/bulk-email",
  "/services/bulk-whatsapp",
  "/services/ussd-codes",
  "/services/shortcodes",
  "/services/mpesa-integration",
  "/services/sms-surveys",
  "/services/airtime-rewards",
  "/services/service-desk",
  "/developers/docs",
  "/guides/best-bulk-sms-kenya",
  "/guides/bulk-sms-kenya",
  "/guides/bulk-email-kenya",
  "/guides/mpesa-stk-push-api-kenya",
  "/guides/sender-id-registration-kenya",
  "/guides/ussd-cost-kenya",
  "/guides/sms-surveys-kenya",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route.startsWith("/guides/") ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route.startsWith("/services/")
          ? 0.9
          : route.startsWith("/guides/")
            ? 0.8
            : 0.7,
  }))
}
