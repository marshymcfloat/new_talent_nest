import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyUpdateWithoutMembersInputObjectSchema } from './CompanyUpdateWithoutMembersInput.schema';
import { CompanyUncheckedUpdateWithoutMembersInputObjectSchema } from './CompanyUncheckedUpdateWithoutMembersInput.schema';
import { CompanyCreateWithoutMembersInputObjectSchema } from './CompanyCreateWithoutMembersInput.schema';
import { CompanyUncheckedCreateWithoutMembersInputObjectSchema } from './CompanyUncheckedCreateWithoutMembersInput.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompanyUpdateWithoutMembersInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyCreateWithoutMembersInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutMembersInputObjectSchema)]),
  where: z.lazy(() => CompanyWhereInputObjectSchema).optional()
}).strict();
export const CompanyUpsertWithoutMembersInputObjectSchema: z.ZodType<Prisma.CompanyUpsertWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpsertWithoutMembersInput>;
export const CompanyUpsertWithoutMembersInputObjectZodSchema = makeSchema();
