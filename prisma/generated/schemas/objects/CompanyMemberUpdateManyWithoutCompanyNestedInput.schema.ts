import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberCreateWithoutCompanyInputObjectSchema } from './CompanyMemberCreateWithoutCompanyInput.schema';
import { CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedCreateWithoutCompanyInput.schema';
import { CompanyMemberCreateOrConnectWithoutCompanyInputObjectSchema } from './CompanyMemberCreateOrConnectWithoutCompanyInput.schema';
import { CompanyMemberUpsertWithWhereUniqueWithoutCompanyInputObjectSchema } from './CompanyMemberUpsertWithWhereUniqueWithoutCompanyInput.schema';
import { CompanyMemberCreateManyCompanyInputEnvelopeObjectSchema } from './CompanyMemberCreateManyCompanyInputEnvelope.schema';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberUpdateWithWhereUniqueWithoutCompanyInputObjectSchema } from './CompanyMemberUpdateWithWhereUniqueWithoutCompanyInput.schema';
import { CompanyMemberUpdateManyWithWhereWithoutCompanyInputObjectSchema } from './CompanyMemberUpdateManyWithWhereWithoutCompanyInput.schema';
import { CompanyMemberScalarWhereInputObjectSchema } from './CompanyMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyMemberCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberCreateWithoutCompanyInputObjectSchema).array(), z.lazy(() => CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CompanyMemberCreateOrConnectWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberCreateOrConnectWithoutCompanyInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CompanyMemberUpsertWithWhereUniqueWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUpsertWithWhereUniqueWithoutCompanyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CompanyMemberCreateManyCompanyInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema), z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CompanyMemberUpdateWithWhereUniqueWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUpdateWithWhereUniqueWithoutCompanyInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CompanyMemberUpdateManyWithWhereWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUpdateManyWithWhereWithoutCompanyInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CompanyMemberScalarWhereInputObjectSchema), z.lazy(() => CompanyMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CompanyMemberUpdateManyWithoutCompanyNestedInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpdateManyWithoutCompanyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpdateManyWithoutCompanyNestedInput>;
export const CompanyMemberUpdateManyWithoutCompanyNestedInputObjectZodSchema = makeSchema();
