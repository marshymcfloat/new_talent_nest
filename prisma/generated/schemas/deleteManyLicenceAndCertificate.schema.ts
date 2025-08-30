import { z } from 'zod';
import { LicenceAndCertificateWhereInputObjectSchema } from './objects/LicenceAndCertificateWhereInput.schema';

export const LicenceAndCertificateDeleteManySchema = z.object({ where: LicenceAndCertificateWhereInputObjectSchema.optional()  })