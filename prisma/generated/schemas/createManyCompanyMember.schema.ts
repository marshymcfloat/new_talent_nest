import { z } from 'zod';
import { CompanyMemberCreateManyInputObjectSchema } from './objects/CompanyMemberCreateManyInput.schema';

export const CompanyMemberCreateManySchema = z.object({ data: z.union([ CompanyMemberCreateManyInputObjectSchema, z.array(CompanyMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })