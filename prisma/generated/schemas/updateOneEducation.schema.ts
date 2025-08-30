import { z } from 'zod';
import { EducationSelectObjectSchema } from './objects/EducationSelect.schema';
import { EducationIncludeObjectSchema } from './objects/EducationInclude.schema';
import { EducationUpdateInputObjectSchema } from './objects/EducationUpdateInput.schema';
import { EducationUncheckedUpdateInputObjectSchema } from './objects/EducationUncheckedUpdateInput.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';

export const EducationUpdateOneSchema = z.object({ select: EducationSelectObjectSchema.optional(), include: EducationIncludeObjectSchema.optional(), data: z.union([EducationUpdateInputObjectSchema, EducationUncheckedUpdateInputObjectSchema]), where: EducationWhereUniqueInputObjectSchema  })