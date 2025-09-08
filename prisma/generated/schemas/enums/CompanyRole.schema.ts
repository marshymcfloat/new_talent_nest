import { z } from 'zod';

export const CompanyRoleSchema = z.enum(['ADMIN', 'MEMBER'])

export type CompanyRole = z.infer<typeof CompanyRoleSchema>;