import { z } from 'zod';

export const SalaryPeriodSchema = z.enum(['HOURLY', 'MONTHLY', 'ANNUAL'])

export type SalaryPeriod = z.infer<typeof SalaryPeriodSchema>;