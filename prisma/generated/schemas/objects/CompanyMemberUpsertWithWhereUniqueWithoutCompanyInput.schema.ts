import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberUpdateWithoutCompanyInputObjectSchema } from './CompanyMemberUpdateWithoutCompanyInput.schema';
import { CompanyMemberUncheckedUpdateWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedUpdateWithoutCompanyInput.schema';
import { CompanyMemberCreateWithoutCompanyInputObjectSchema } from './CompanyMemberCreateWithoutCompanyInput.schema';
import { CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedCreateWithoutCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CompanyMemberUpdateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUncheckedUpdateWithoutCompanyInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyMemberCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema)])
}).strict();
export const CompanyMemberUpsertWithWhereUniqueWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpsertWithWhereUniqueWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpsertWithWhereUniqueWithoutCompanyInput>;
export const CompanyMemberUpsertWithWhereUniqueWithoutCompanyInputObjectZodSchema = makeSchema();
