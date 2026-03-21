import * as z from 'zod';
export const RegistrationsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    studentId: z.number(),
    eventId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    event: z.number(),
    student: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    studentId: z.string().nullable(),
    eventId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    studentId: z.string().nullable(),
    eventId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()});