import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyUpdateWithoutQuestionsInputObjectSchema } from './CompanyUpdateWithoutQuestionsInput.schema';
import { CompanyUncheckedUpdateWithoutQuestionsInputObjectSchema } from './CompanyUncheckedUpdateWithoutQuestionsInput.schema';
import { CompanyCreateWithoutQuestionsInputObjectSchema } from './CompanyCreateWithoutQuestionsInput.schema';
import { CompanyUncheckedCreateWithoutQuestionsInputObjectSchema } from './CompanyUncheckedCreateWithoutQuestionsInput.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompanyUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyCreateWithoutQuestionsInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutQuestionsInputObjectSchema)]),
  where: z.lazy(() => CompanyWhereInputObjectSchema).optional()
}).strict();
export const CompanyUpsertWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.CompanyUpsertWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpsertWithoutQuestionsInput>;
export const CompanyUpsertWithoutQuestionsInputObjectZodSchema = makeSchema();
