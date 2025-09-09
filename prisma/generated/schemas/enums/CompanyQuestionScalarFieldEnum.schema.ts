import { z } from 'zod';

export const CompanyQuestionScalarFieldEnumSchema = z.enum(['id', 'text', 'type', 'options', 'companyId', 'isArchived'])

export type CompanyQuestionScalarFieldEnum = z.infer<typeof CompanyQuestionScalarFieldEnumSchema>;