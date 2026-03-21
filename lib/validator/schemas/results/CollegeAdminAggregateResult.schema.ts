import * as z from 'zod';
export const CollegeAdminAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    password: z.number(),
    phone: z.number(),
    collegeId: z.number(),
    college: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    phone: z.string().nullable(),
    collegeId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    phone: z.string().nullable(),
    collegeId: z.string().nullable()
  }).nullable().optional()});