import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationIdUserIdCompoundUniqueInputObjectSchema } from './EducationIdUserIdCompoundUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string(),
  id_userId: z.lazy(() => EducationIdUserIdCompoundUniqueInputObjectSchema)
}).strict();
export const EducationWhereUniqueInputObjectSchema: z.ZodType<Prisma.EducationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationWhereUniqueInput>;
export const EducationWhereUniqueInputObjectZodSchema = makeSchema();
