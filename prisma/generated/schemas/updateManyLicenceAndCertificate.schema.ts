import { z } from 'zod';
import { LicenceAndCertificateUpdateManyMutationInputObjectSchema } from './objects/LicenceAndCertificateUpdateManyMutationInput.schema';
import { LicenceAndCertificateWhereInputObjectSchema } from './objects/LicenceAndCertificateWhereInput.schema';

export const LicenceAndCertificateUpdateManySchema = z.object({ data: LicenceAndCertificateUpdateManyMutationInputObjectSchema, where: LicenceAndCertificateWhereInputObjectSchema.optional()  })