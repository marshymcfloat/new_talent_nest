import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  organization: z.boolean().optional(),
  dateIssed: z.boolean().optional(),
  expiryDate: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const LicenceAndCertificateSelectObjectSchema: z.ZodType<Prisma.LicenceAndCertificateSelect> = makeSchema() as unknown as z.ZodType<Prisma.LicenceAndCertificateSelect>;
export const LicenceAndCertificateSelectObjectZodSchema = makeSchema();
