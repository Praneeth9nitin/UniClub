import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  clubId: z.string(),
  studentId: z.string(),
  roleId: z.string(),
  status: statusSchema.optional()
}).strict();
export const StudentInClubUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedCreateInput>;
export const StudentInClubUncheckedCreateInputObjectZodSchema = makeSchema();
