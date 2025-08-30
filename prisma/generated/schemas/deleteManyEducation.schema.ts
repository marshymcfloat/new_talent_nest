import { z } from 'zod';
import { EducationWhereInputObjectSchema } from './objects/EducationWhereInput.schema';

export const EducationDeleteManySchema = z.object({ where: EducationWhereInputObjectSchema.optional()  })