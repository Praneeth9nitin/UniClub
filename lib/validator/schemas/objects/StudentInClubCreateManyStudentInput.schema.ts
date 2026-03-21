import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  clubId: z.string(),
  roleId: z.string(),
  status: statusSchema.optional()
}).strict();
export const StudentInClubCreateManyStudentInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateManyStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateManyStudentInput>;
export const StudentInClubCreateManyStudentInputObjectZodSchema = makeSchema();
