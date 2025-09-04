import { z } from 'zod';
import { CompanyMemberSelectObjectSchema } from './objects/CompanyMemberSelect.schema';
import { CompanyMemberCreateManyInputObjectSchema } from './objects/CompanyMemberCreateManyInput.schema';

export const CompanyMemberCreateManyAndReturnSchema = z.object({ select: CompanyMemberSelectObjectSchema.optional(), data: z.union([ CompanyMemberCreateManyInputObjectSchema, z.array(CompanyMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()