export type ContactFormData = {
  name: string;
  contact: string;
  email: string;
  organization: string;
  message: string;
};

// Centralized validation utility for contact form
export function validateContactForm(formData: ContactFormData) {
  const errors: Record<string, string> = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "Required";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Min 2 Characters";
  }

  // Contact number validation
  if (!formData.contact.trim()) {
    errors.contact = "Required";
  } else if (!/^\d{10}$/.test(formData.contact)) {
    errors.contact = "Invalid Number";
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = "Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid Email";
  }

  // Organization validation
  if (!formData.organization.trim()) {
    errors.organization = "Required";
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = "Required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Min 10 Characters";
  }

  return errors;
}
