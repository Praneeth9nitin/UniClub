import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  email: z.string(),
  password: z.string()
}).strict();
export const FacultyCreateManyCollegeInputObjectSchema: z.ZodType<Prisma.FacultyCreateManyCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateManyCollegeInput>;
export const FacultyCreateManyCollegeInputObjectZodSchema = makeSchema();
