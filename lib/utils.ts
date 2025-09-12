import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function objectToFormData(
  obj: Record<
    string,
    string | number | boolean | File | FileList | null | undefined | object
  >
): FormData {
  const formData = new FormData();

  Object.entries(obj).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      return;
    }

    if (value instanceof FileList && value.length > 0) {
      formData.append(key, value[0]);
    } else if (value instanceof File) {
      formData.append(key, value);
    } else if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value.toString());
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
