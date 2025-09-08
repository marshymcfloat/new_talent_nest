import { z } from 'zod';

export const EmployerQuestionScalarFieldEnumSchema = z.enum(['id', 'text', 'type', 'isRequired', 'options', 'jobId'])

export type EmployerQuestionScalarFieldEnum = z.infer<typeof EmployerQuestionScalarFieldEnumSchema>;