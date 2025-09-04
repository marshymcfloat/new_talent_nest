import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateWithoutMembersInputObjectSchema } from './CompanyCreateWithoutMembersInput.schema';
import { CompanyUncheckedCreateWithoutMembersInputObjectSchema } from './CompanyUncheckedCreateWithoutMembersInput.schema';
import { CompanyCreateOrConnectWithoutMembersInputObjectSchema } from './CompanyCreateOrConnectWithoutMembersInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => CompanyCreateWithoutMembersInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompanyCreateNestedOneWithoutMembersInputObjectSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateNestedOneWithoutMembersInput>;
export const CompanyCreateNestedOneWithoutMembersInputObjectZodSchema = makeSchema();
