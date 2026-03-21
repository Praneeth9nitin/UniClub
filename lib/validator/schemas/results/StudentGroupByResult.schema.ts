import * as z from 'zod';
export const StudentGroupByResultSchema = z.array(z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  rollnumber: z.string(),
  collegeId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  _count: z.object({
    id: z.number(),
    firstName: z.number(),
    lastName: z.number(),
    email: z.number(),
    password: z.number(),
    rollnumber: z.number(),
    collegeId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    deletedAt: z.number(),
    registrations: z.number(),
    college: z.number(),
    clubs: z.number(),
    follows: z.number(),
    followsClub: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    rollnumber: z.string().nullable(),
    collegeId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    rollnumber: z.string().nullable(),
    collegeId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    deletedAt: z.date().nullable()
  }).nullable().optional()
}));