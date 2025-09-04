import { z } from 'zod';
import { CompanyMemberSelectObjectSchema } from './objects/CompanyMemberSelect.schema';
import { CompanyMemberIncludeObjectSchema } from './objects/CompanyMemberInclude.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './objects/CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberCreateInputObjectSchema } from './objects/CompanyMemberCreateInput.schema';
import { CompanyMemberUncheckedCreateInputObjectSchema } from './objects/CompanyMemberUncheckedCreateInput.schema';
import { CompanyMemberUpdateInputObjectSchema } from './objects/CompanyMemberUpdateInput.schema';
import { CompanyMemberUncheckedUpdateInputObjectSchema } from './objects/CompanyMemberUncheckedUpdateInput.schema';

export const CompanyMemberUpsertSchema = z.object({ select: CompanyMemberSelectObjectSchema.optional(), include: CompanyMemberIncludeObjectSchema.optional(), where: CompanyMemberWhereUniqueInputObjectSchema, create: z.union([ CompanyMemberCreateInputObjectSchema, CompanyMemberUncheckedCreateInputObjectSchema ]), update: z.union([ CompanyMemberUpdateInputObjectSchema, CompanyMemberUncheckedUpdateInputObjectSchema ])  })