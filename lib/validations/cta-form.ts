import { z } from "zod";

// Schema for validating CTA form data before adapting it to the contact form schema
export const ctaFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  phone: z
    .string()
    .regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, "Please select a service"),
  product: z
    .string()
    .min(1, "Please select a product"),
});

export type CtaFormData = z.infer<typeof ctaFormSchema>;

// Function to adapt CTA form data to contact form schema
export function adaptCtaFormToContactForm(ctaForm: CtaFormData) {
  const nameParts = ctaForm.name.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";
  
  return {
    firstName,
    lastName,
    email: ctaForm.email,
    phone: ctaForm.phone || "",
    subject: `${ctaForm.service} Inquiry: ${ctaForm.product}`,
    inquiry: "sales", // Default to sales as this is from the CTA section
    message: `Service: ${ctaForm.service}\nProduct: ${ctaForm.product}\n\nThis inquiry was sent from the CTA section.`
  };
} 