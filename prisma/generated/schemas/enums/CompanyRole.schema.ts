import { z } from 'zod';

export const CompanyRoleSchema = z.enum(['ADMIN', 'MEMBER'])