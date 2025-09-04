import { z } from 'zod';
import { CompanyMemberSelectObjectSchema } from './objects/CompanyMemberSelect.schema';
import { CompanyMemberIncludeObjectSchema } from './objects/CompanyMemberInclude.schema';
import { CompanyMemberUpdateInputObjectSchema } from './objects/CompanyMemberUpdateInput.schema';
import { CompanyMemberUncheckedUpdateInputObjectSchema } from './objects/CompanyMemberUncheckedUpdateInput.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './objects/CompanyMemberWhereUniqueInput.schema';

export const CompanyMemberUpdateOneSchema = z.object({ select: CompanyMemberSelectObjectSchema.optional(), include: CompanyMemberIncludeObjectSchema.optional(), data: z.union([CompanyMemberUpdateInputObjectSchema, CompanyMemberUncheckedUpdateInputObjectSchema]), where: CompanyMemberWhereUniqueInputObjectSchema  })