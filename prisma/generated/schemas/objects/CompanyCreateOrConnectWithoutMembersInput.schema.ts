import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutMembersInputObjectSchema } from './CompanyCreateWithoutMembersInput.schema';
import { CompanyUncheckedCreateWithoutMembersInputObjectSchema } from './CompanyUncheckedCreateWithoutMembersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyCreateWithoutMembersInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict();
export const CompanyCreateOrConnectWithoutMembersInputObjectSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateOrConnectWithoutMembersInput>;
export const CompanyCreateOrConnectWithoutMembersInputObjectZodSchema = makeSchema();
