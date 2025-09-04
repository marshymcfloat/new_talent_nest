import { z } from 'zod';
import { CompanyMemberWhereInputObjectSchema } from './objects/CompanyMemberWhereInput.schema';

export const CompanyMemberDeleteManySchema = z.object({ where: CompanyMemberWhereInputObjectSchema.optional()  })