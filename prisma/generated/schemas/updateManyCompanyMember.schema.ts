import { z } from 'zod';
import { CompanyMemberUpdateManyMutationInputObjectSchema } from './objects/CompanyMemberUpdateManyMutationInput.schema';
import { CompanyMemberWhereInputObjectSchema } from './objects/CompanyMemberWhereInput.schema';

export const CompanyMemberUpdateManySchema = z.object({ data: CompanyMemberUpdateManyMutationInputObjectSchema, where: CompanyMemberWhereInputObjectSchema.optional()  })