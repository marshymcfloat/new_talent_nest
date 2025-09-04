import { z } from 'zod';
import { CompanyMemberSelectObjectSchema } from './objects/CompanyMemberSelect.schema';
import { CompanyMemberIncludeObjectSchema } from './objects/CompanyMemberInclude.schema';
import { CompanyMemberCreateInputObjectSchema } from './objects/CompanyMemberCreateInput.schema';
import { CompanyMemberUncheckedCreateInputObjectSchema } from './objects/CompanyMemberUncheckedCreateInput.schema';

export const CompanyMemberCreateOneSchema = z.object({ select: CompanyMemberSelectObjectSchema.optional(), include: CompanyMemberIncludeObjectSchema.optional(), data: z.union([CompanyMemberCreateInputObjectSchema, CompanyMemberUncheckedCreateInputObjectSchema])  })