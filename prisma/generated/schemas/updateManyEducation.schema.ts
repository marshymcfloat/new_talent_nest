import { z } from 'zod';
import { EducationUpdateManyMutationInputObjectSchema } from './objects/EducationUpdateManyMutationInput.schema';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';

export const EducationUpdateManySchema = z.object({ data: EducationUpdateManyMutationInputObjectSchema, where: EducationWhereInputObjectSchema.optional()  })