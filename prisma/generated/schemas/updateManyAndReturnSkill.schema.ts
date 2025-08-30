import { z } from 'zod';
import { SkillSelectObjectSchema } from './objects/SkillSelect.schema';
import { SkillUpdateManyMutationInputObjectSchema } from './objects/SkillUpdateManyMutationInput.schema';
import { SkillWhereInputObjectSchema } from './objects/SkillWhereInput.schema';

export const SkillUpdateManyAndReturnSchema = z.object({ select: SkillSelectObjectSchema.optional(), data: SkillUpdateManyMutationInputObjectSchema, where: SkillWhereInputObjectSchema.optional()  }).strict()