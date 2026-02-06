type ContactFormData = {
  name: string;
  email: string;
  contact: string;
  college: string;
  city: string;
};

export function validateSignupForm(data: Partial<ContactFormData>) {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Enter a valid full name";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!data.contact) {
    errors.contact = "Contact number is required";
  } else if (!/^\d{10}$/.test(data.contact)) {
    errors.contact = "Enter a valid 10-digit number";
  }

  if (!data.college || data.college.trim().length < 2) {
    errors.college = "College name is required";
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.city = "City is required";
  }

  return errors;
}
