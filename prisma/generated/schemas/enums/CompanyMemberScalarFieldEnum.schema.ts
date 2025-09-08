import { z } from 'zod';

export const CompanyMemberScalarFieldEnumSchema = z.enum(['userId', 'companyId', 'role'])

export type CompanyMemberScalarFieldEnum = z.infer<typeof CompanyMemberScalarFieldEnumSchema>;