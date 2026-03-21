import * as z from 'zod';
export const StudentFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  rollnumber: z.string().optional(),
  collegeId: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  registrations: z.array(z.unknown()),
  college: z.unknown().optional(),
  clubs: z.array(z.unknown()),
  follows: z.array(z.unknown()),
  followsClub: z.array(z.unknown())
}));