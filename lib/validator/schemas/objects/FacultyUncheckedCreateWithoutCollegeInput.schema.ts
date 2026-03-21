import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubUncheckedCreateNestedManyWithoutCoordinatorInputObjectSchema as ClubUncheckedCreateNestedManyWithoutCoordinatorInputObjectSchema } from './ClubUncheckedCreateNestedManyWithoutCoordinatorInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  email: z.string(),
  password: z.string(),
  club: z.lazy(() => ClubUncheckedCreateNestedManyWithoutCoordinatorInputObjectSchema).optional()
}).strict();
export const FacultyUncheckedCreateWithoutCollegeInputObjectSchema: z.ZodType<Prisma.FacultyUncheckedCreateWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUncheckedCreateWithoutCollegeInput>;
export const FacultyUncheckedCreateWithoutCollegeInputObjectZodSchema = makeSchema();
