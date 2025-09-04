import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';
import { CompanyUpdateWithoutMembersInputObjectSchema } from './CompanyUpdateWithoutMembersInput.schema';
import { CompanyUncheckedUpdateWithoutMembersInputObjectSchema } from './CompanyUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompanyUpdateWithoutMembersInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutMembersInputObjectSchema)])
}).strict();
export const CompanyUpdateToOneWithWhereWithoutMembersInputObjectSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutMembersInput>;
export const CompanyUpdateToOneWithWhereWithoutMembersInputObjectZodSchema = makeSchema();
