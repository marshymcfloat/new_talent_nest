import { z } from 'zod';
import { SkillSelectObjectSchema } from './objects/SkillSelect.schema';
import { SkillIncludeObjectSchema } from './objects/SkillInclude.schema';
import { SkillWhereUniqueInputObjectSchema } from './objects/SkillWhereUniqueInput.schema';

export const SkillFindUniqueSchema = z.object({ select: SkillSelectObjectSchema.optional(), include: SkillIncludeObjectSchema.optional(), where: SkillWhereUniqueInputObjectSchema })