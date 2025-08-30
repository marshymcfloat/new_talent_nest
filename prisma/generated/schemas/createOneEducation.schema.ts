import { z } from 'zod';
import { EducationSelectObjectSchema } from './objects/EducationSelect.schema';
import { EducationIncludeObjectSchema } from './objects/EducationInclude.schema';
import { EducationCreateInputObjectSchema } from './objects/EducationCreateInput.schema';
import { EducationUncheckedCreateInputObjectSchema } from './objects/EducationUncheckedCreateInput.schema';

export const EducationCreateOneSchema = z.object({ select: EducationSelectObjectSchema.optional(), include: EducationIncludeObjectSchema.optional(), data: z.union([EducationCreateInputObjectSchema, EducationUncheckedCreateInputObjectSchema])  })