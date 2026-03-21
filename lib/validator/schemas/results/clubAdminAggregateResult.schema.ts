import * as z from 'zod';
export const clubAdminAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    firstName: z.number(),
    lastName: z.number(),
    email: z.number(),
    password: z.number(),
    clubId: z.number(),
    club: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    clubId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    clubId: z.string().nullable()
  }).nullable().optional()});