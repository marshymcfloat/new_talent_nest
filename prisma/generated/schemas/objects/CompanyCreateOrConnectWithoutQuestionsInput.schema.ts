import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutQuestionsInputObjectSchema } from './CompanyCreateWithoutQuestionsInput.schema';
import { CompanyUncheckedCreateWithoutQuestionsInputObjectSchema } from './CompanyUncheckedCreateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyCreateWithoutQuestionsInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutQuestionsInputObjectSchema)])
}).strict();
export const CompanyCreateOrConnectWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateOrConnectWithoutQuestionsInput>;
export const CompanyCreateOrConnectWithoutQuestionsInputObjectZodSchema = makeSchema();
