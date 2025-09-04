import { validateEmployerSignUpStep1 } from "../actions/employerAuthActions";

export type ValidateStep1Result = Awaited<
  ReturnType<typeof validateEmployerSignUpStep1>
>;
