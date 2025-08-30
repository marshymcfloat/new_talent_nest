import { z } from 'zod';
import { SkillSelectObjectSchema } from './objects/SkillSelect.schema';
import { SkillCreateManyInputObjectSchema } from './objects/SkillCreateManyInput.schema';

export const SkillCreateManyAndReturnSchema = z.object({ select: SkillSelectObjectSchema.optional(), data: z.union([ SkillCreateManyInputObjectSchema, z.array(SkillCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()