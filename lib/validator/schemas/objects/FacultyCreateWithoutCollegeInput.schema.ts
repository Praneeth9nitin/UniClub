import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateNestedManyWithoutCoordinatorInputObjectSchema as ClubCreateNestedManyWithoutCoordinatorInputObjectSchema } from './ClubCreateNestedManyWithoutCoordinatorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  email: z.string(),
  password: z.string(),
  club: z.lazy(() => ClubCreateNestedManyWithoutCoordinatorInputObjectSchema).optional()
}).strict();
export const FacultyCreateWithoutCollegeInputObjectSchema: z.ZodType<Prisma.FacultyCreateWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateWithoutCollegeInput>;
export const FacultyCreateWithoutCollegeInputObjectZodSchema = makeSchema();
