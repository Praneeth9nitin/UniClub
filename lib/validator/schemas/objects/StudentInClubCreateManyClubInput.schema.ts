import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  studentId: z.string(),
  roleId: z.string(),
  status: statusSchema.optional()
}).strict();
export const StudentInClubCreateManyClubInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateManyClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateManyClubInput>;
export const StudentInClubCreateManyClubInputObjectZodSchema = makeSchema();
