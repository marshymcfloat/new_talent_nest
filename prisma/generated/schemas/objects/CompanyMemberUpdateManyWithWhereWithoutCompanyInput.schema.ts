import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberScalarWhereInputObjectSchema } from './CompanyMemberScalarWhereInput.schema';
import { CompanyMemberUpdateManyMutationInputObjectSchema } from './CompanyMemberUpdateManyMutationInput.schema';
import { CompanyMemberUncheckedUpdateManyWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedUpdateManyWithoutCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => CompanyMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CompanyMemberUpdateManyMutationInputObjectSchema), z.lazy(() => CompanyMemberUncheckedUpdateManyWithoutCompanyInputObjectSchema)])
}).strict();
export const CompanyMemberUpdateManyWithWhereWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpdateManyWithWhereWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpdateManyWithWhereWithoutCompanyInput>;
export const CompanyMemberUpdateManyWithWhereWithoutCompanyInputObjectZodSchema = makeSchema();
