import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberCreateWithoutCompanyInputObjectSchema } from './CompanyMemberCreateWithoutCompanyInput.schema';
import { CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedCreateWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyMemberCreateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUncheckedCreateWithoutCompanyInputObjectSchema)])
}).strict();
export const CompanyMemberCreateOrConnectWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberCreateOrConnectWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateOrConnectWithoutCompanyInput>;
export const CompanyMemberCreateOrConnectWithoutCompanyInputObjectZodSchema = makeSchema();
