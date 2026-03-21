import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateNestedOneWithoutFacultyInputObjectSchema as CollegeCreateNestedOneWithoutFacultyInputObjectSchema } from './CollegeCreateNestedOneWithoutFacultyInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  email: z.string(),
  password: z.string(),
  college: z.lazy(() => CollegeCreateNestedOneWithoutFacultyInputObjectSchema)
}).strict();
export const FacultyCreateWithoutClubInputObjectSchema: z.ZodType<Prisma.FacultyCreateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateWithoutClubInput>;
export const FacultyCreateWithoutClubInputObjectZodSchema = makeSchema();
