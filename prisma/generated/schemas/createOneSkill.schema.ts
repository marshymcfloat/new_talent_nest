import { z } from 'zod';
import { SkillSelectObjectSchema } from './objects/SkillSelect.schema';
import { SkillIncludeObjectSchema } from './objects/SkillInclude.schema';
import { SkillCreateInputObjectSchema } from './objects/SkillCreateInput.schema';
import { SkillUncheckedCreateInputObjectSchema } from './objects/SkillUncheckedCreateInput.schema';

export const SkillCreateOneSchema = z.object({ select: SkillSelectObjectSchema.optional(), include: SkillIncludeObjectSchema.optional(), data: z.union([SkillCreateInputObjectSchema, SkillUncheckedCreateInputObjectSchema])  })