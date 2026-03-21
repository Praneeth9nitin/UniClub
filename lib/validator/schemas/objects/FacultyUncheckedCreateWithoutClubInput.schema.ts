import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  collegeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  email: z.string(),
  password: z.string()
}).strict();
export const FacultyUncheckedCreateWithoutClubInputObjectSchema: z.ZodType<Prisma.FacultyUncheckedCreateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUncheckedCreateWithoutClubInput>;
export const FacultyUncheckedCreateWithoutClubInputObjectZodSchema = makeSchema();
