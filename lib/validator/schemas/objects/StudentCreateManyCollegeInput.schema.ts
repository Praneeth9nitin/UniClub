import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  rollnumber: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const StudentCreateManyCollegeInputObjectSchema: z.ZodType<Prisma.StudentCreateManyCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateManyCollegeInput>;
export const StudentCreateManyCollegeInputObjectZodSchema = makeSchema();
