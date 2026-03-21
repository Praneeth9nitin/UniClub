import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  clubId: z.string(),
  studentId: z.string(),
  status: statusSchema.optional()
}).strict();
export const StudentInClubCreateManyRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubCreateManyRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateManyRoleInput>;
export const StudentInClubCreateManyRoleInputObjectZodSchema = makeSchema();
