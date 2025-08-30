import { z } from 'zod';
import { EducationCreateManyInputObjectSchema } from './objects/EducationCreateManyInput.schema';

export const EducationCreateManySchema = z.object({ data: z.union([ EducationCreateManyInputObjectSchema, z.array(EducationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })