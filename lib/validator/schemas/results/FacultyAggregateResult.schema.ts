import * as z from 'zod';
export const FacultyAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    collegeId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    email: z.number(),
    password: z.number(),
    club: z.number(),
    college: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    collegeId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    collegeId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable()
  }).nullable().optional()});