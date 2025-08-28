import { z } from 'zod';

export const EmployerQuestionScalarFieldEnumSchema = z.enum(['id', 'text', 'type', 'isRequired', 'options', 'jobId'])