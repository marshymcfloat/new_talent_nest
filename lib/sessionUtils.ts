import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { Session } from "next-auth";

type ActionResponse<T> = {
  data?: T;
  error?: string;
  validationErrors?: z.ZodIssue[];
  success?: boolean;
  message?: string;
};

export function createValidatedAuthedAction<
  TInput extends z.ZodTypeAny,
  TOutput,
>(
  schema: TInput,
  handler: (
    validatedData: z.infer<TInput>,
    session: Session
  ) => Promise<ActionResponse<TOutput>>
) {
  return async (data: z.input<TInput>): Promise<ActionResponse<TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        error: "Invalid form data.",
        validationErrors: validationResult.error.issues,
      };
    }

    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return { error: "Authentication required." };
    }

    try {
      return await handler(validationResult.data, session);
    } catch (e) {
      console.error("Action Error:", e);
      return { error: "An unexpected error occurred." };
    }
  };
}

export function createValidatedAction<TInput extends z.ZodTypeAny, TOutput>(
  schema: TInput,
  handler: (validatedData: z.infer<TInput>) => Promise<ActionResponse<TOutput>>
) {
  return async (data: z.input<TInput>): Promise<ActionResponse<TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        error: "Invalid form data.",
        validationErrors: validationResult.error.issues,
      };
    }

    try {
      return await handler(validationResult.data);
    } catch (e) {
      console.error("Action Error:", e);
      return { error: "An unexpected error occurred." };
    }
  };
}

export function createValidatedFormDataAction<
  TInput extends z.ZodTypeAny,
  TOutput,
>(
  schema: TInput,
  handler: (validatedData: z.infer<TInput>) => Promise<ActionResponse<TOutput>>
) {
  return async (formData: FormData): Promise<ActionResponse<TOutput>> => {
    const data = Object.fromEntries(formData.entries());

    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        error: "Invalid form data.",
        validationErrors: validationResult.error.issues,
      };
    }

    try {
      return await handler(validationResult.data);
    } catch (e) {
      console.error("Action Error:", e);
      return { error: "An unexpected error occurred." };
    }
  };
}
