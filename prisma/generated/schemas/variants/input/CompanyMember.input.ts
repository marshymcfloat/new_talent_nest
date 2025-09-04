import { z } from 'zod';

import { CompanyRoleSchema } from '../../enums/CompanyRole.schema';
// prettier-ignore
export const CompanyMemberInputSchema = z.object({
    userId: z.string(),
    companyId: z.string(),
    user: z.unknown(),
    company: z.unknown(),
    role: CompanyRoleSchema
}).strict();

export type CompanyMemberInputType = z.infer<typeof CompanyMemberInputSchema>;
