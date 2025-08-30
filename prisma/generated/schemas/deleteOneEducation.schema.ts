import { z } from 'zod';
import { EducationSelectObjectSchema } from './objects/EducationSelect.schema';
import { EducationIncludeObjectSchema } from './objects/EducationInclude.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';

export const EducationDeleteOneSchema = z.object({ select: EducationSelectObjectSchema.optional(), include: EducationIncludeObjectSchema.optional(), where: EducationWhereUniqueInputObjectSchema  })