import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function objectToFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      return;
    }

    if (value instanceof FileList && value.length > 0) {
      formData.append(key, value[0]);
    } else {
      formData.append(key, value);
    }
  });

  return formData;
}

export function formatSalary(amount: number) {
  return amount.toLocaleString("en-PH", {
    currency: "PHP",
    style: "currency",
    minimumFractionDigits: 2,
  });
}
