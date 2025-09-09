import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateWithoutQuestionsInputObjectSchema } from './CompanyCreateWithoutQuestionsInput.schema';
import { CompanyUncheckedCreateWithoutQuestionsInputObjectSchema } from './CompanyUncheckedCreateWithoutQuestionsInput.schema';
import { CompanyCreateOrConnectWithoutQuestionsInputObjectSchema } from './CompanyCreateOrConnectWithoutQuestionsInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyCreateWithoutQuestionsInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutQuestionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutQuestionsInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompanyCreateNestedOneWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateNestedOneWithoutQuestionsInput>;
export const CompanyCreateNestedOneWithoutQuestionsInputObjectZodSchema = makeSchema();
