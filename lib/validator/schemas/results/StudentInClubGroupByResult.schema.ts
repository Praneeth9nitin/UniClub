import * as z from 'zod';
export const StudentInClubGroupByResultSchema = z.array(z.object({
  id: z.string(),
  clubId: z.string(),
  studentId: z.string(),
  roleId: z.string(),
  _count: z.object({
    id: z.number(),
    clubId: z.number(),
    studentId: z.number(),
    roleId: z.number(),
    status: z.number(),
    club: z.number(),
    role: z.number(),
    student: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    clubId: z.string().nullable(),
    studentId: z.string().nullable(),
    roleId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    clubId: z.string().nullable(),
    studentId: z.string().nullable(),
    roleId: z.string().nullable()
  }).nullable().optional()
}));