import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberUpdateWithoutCompanyInputObjectSchema } from './CompanyMemberUpdateWithoutCompanyInput.schema';
import { CompanyMemberUncheckedUpdateWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedUpdateWithoutCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CompanyMemberUpdateWithoutCompanyInputObjectSchema), z.lazy(() => CompanyMemberUncheckedUpdateWithoutCompanyInputObjectSchema)])
}).strict();
export const CompanyMemberUpdateWithWhereUniqueWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpdateWithWhereUniqueWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpdateWithWhereUniqueWithoutCompanyInput>;
export const CompanyMemberUpdateWithWhereUniqueWithoutCompanyInputObjectZodSchema = makeSchema();
