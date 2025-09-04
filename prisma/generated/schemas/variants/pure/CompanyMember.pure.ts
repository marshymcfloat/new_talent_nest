import { z } from 'zod';

import { CompanyRoleSchema } from '../../enums/CompanyRole.schema';
// prettier-ignore
export const CompanyMemberModelSchema = z.object({
    userId: z.string(),
    companyId: z.string(),
    user: z.unknown(),
    company: z.unknown(),
    role: CompanyRoleSchema
}).strict();

export type CompanyMemberModelType = z.infer<typeof CompanyMemberModelSchema>;
