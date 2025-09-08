import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateWithoutMembersInputObjectSchema } from './CompanyCreateWithoutMembersInput.schema';
import { CompanyUncheckedCreateWithoutMembersInputObjectSchema } from './CompanyUncheckedCreateWithoutMembersInput.schema';
import { CompanyCreateOrConnectWithoutMembersInputObjectSchema } from './CompanyCreateOrConnectWithoutMembersInput.schema';
import { CompanyUpsertWithoutMembersInputObjectSchema } from './CompanyUpsertWithoutMembersInput.schema';
import { CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateToOneWithWhereWithoutMembersInputObjectSchema } from './CompanyUpdateToOneWithWhereWithoutMembersInput.schema';
import { CompanyUpdateWithoutMembersInputObjectSchema } from './CompanyUpdateWithoutMembersInput.schema';
import { CompanyUncheckedUpdateWithoutMembersInputObjectSchema } from './CompanyUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyCreateWithoutMembersInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompanyUpdateToOneWithWhereWithoutMembersInputObjectSchema), z.lazy(() => CompanyUpdateWithoutMembersInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutMembersInputObjectSchema)]).optional()
}).strict();
export const CompanyUpdateOneRequiredWithoutMembersNestedInputObjectSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutMembersNestedInput>;
export const CompanyUpdateOneRequiredWithoutMembersNestedInputObjectZodSchema = makeSchema();
