import { z } from 'zod';
import { EducationSelectObjectSchema } from './objects/EducationSelect.schema';
import { EducationIncludeObjectSchema } from './objects/EducationInclude.schema';
import { EducationWhereUniqueInputObjectSchema } from './objects/EducationWhereUniqueInput.schema';
import { EducationCreateInputObjectSchema } from './objects/EducationCreateInput.schema';
import { EducationUncheckedCreateInputObjectSchema } from './objects/EducationUncheckedCreateInput.schema';
import { EducationUpdateInputObjectSchema } from './objects/EducationUpdateInput.schema';
import { EducationUncheckedUpdateInputObjectSchema } from './objects/EducationUncheckedUpdateInput.schema';

export const EducationUpsertSchema = z.object({ select: EducationSelectObjectSchema.optional(), include: EducationIncludeObjectSchema.optional(), where: EducationWhereUniqueInputObjectSchema, create: z.union([ EducationCreateInputObjectSchema, EducationUncheckedCreateInputObjectSchema ]), update: z.union([ EducationUpdateInputObjectSchema, EducationUncheckedUpdateInputObjectSchema ])  })