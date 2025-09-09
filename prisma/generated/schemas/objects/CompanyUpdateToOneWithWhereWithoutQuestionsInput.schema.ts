import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';
import { CompanyUpdateWithoutQuestionsInputObjectSchema } from './CompanyUpdateWithoutQuestionsInput.schema';
import { CompanyUncheckedUpdateWithoutQuestionsInputObjectSchema } from './CompanyUncheckedUpdateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompanyUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutQuestionsInputObjectSchema)])
}).strict();
export const CompanyUpdateToOneWithWhereWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutQuestionsInput>;
export const CompanyUpdateToOneWithWhereWithoutQuestionsInputObjectZodSchema = makeSchema();
