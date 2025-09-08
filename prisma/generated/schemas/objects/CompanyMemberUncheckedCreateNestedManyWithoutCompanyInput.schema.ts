import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberCreateWithoutCompanyInputObjectSchema } from './CompanyMemberCreateWithoutCompanyInput.schema';
import { CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedCreateWithoutCompanyInput.schema';
import { CompanyMemberCreateOrConnectWithoutCompanyInputObjectSchema } from './CompanyMemberCreateOrConnectWithoutCompanyInput.schema';
import { CompanyMemberCreateManyCompanyInputEnvelopeObjectSchema } from './CompanyMemberCreateManyCompanyInputEnvelope.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyMemberCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberCreateWithoutCompanyInputObjectSchema).array(), z.lazy(() => CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CompanyMemberCreateOrConnectWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberCreateOrConnectWithoutCompanyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CompanyMemberCreateManyCompanyInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CompanyMemberUncheckedCreateNestedManyWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberUncheckedCreateNestedManyWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUncheckedCreateNestedManyWithoutCompanyInput>;
export const CompanyMemberUncheckedCreateNestedManyWithoutCompanyInputObjectZodSchema = makeSchema();
