import { z } from 'zod';
import { EducationSelectObjectSchema } from './objects/EducationSelect.schema';
import { EducationUpdateManyMutationInputObjectSchema } from './objects/EducationUpdateManyMutationInput.schema';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';

export const EducationUpdateManyAndReturnSchema = z.object({ select: EducationSelectObjectSchema.optional(), data: EducationUpdateManyMutationInputObjectSchema, where: EducationWhereInputObjectSchema.optional()  }).strict()