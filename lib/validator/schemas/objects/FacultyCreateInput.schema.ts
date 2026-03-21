import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateNestedManyWithoutCoordinatorInputObjectSchema as ClubCreateNestedManyWithoutCoordinatorInputObjectSchema } from './ClubCreateNestedManyWithoutCoordinatorInput.schema';
import { CollegeCreateNestedOneWithoutFacultyInputObjectSchema as CollegeCreateNestedOneWithoutFacultyInputObjectSchema } from './CollegeCreateNestedOneWithoutFacultyInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  email: z.string(),
  password: z.string(),
  club: z.lazy(() => ClubCreateNestedManyWithoutCoordinatorInputObjectSchema).optional(),
  college: z.lazy(() => CollegeCreateNestedOneWithoutFacultyInputObjectSchema)
}).strict();
export const FacultyCreateInputObjectSchema: z.ZodType<Prisma.FacultyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateInput>;
export const FacultyCreateInputObjectZodSchema = makeSchema();
