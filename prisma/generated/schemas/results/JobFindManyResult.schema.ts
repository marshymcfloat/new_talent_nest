import { z } from 'zod';
export const JobFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  company: z.string(),
  title: z.string(),
  location: z.string(),
  type: z.unknown(),
  salary: z.string(),
  JobClass: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  JobApplication: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});