import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  clubId: z.string(),
  studentId: z.string(),
  status: statusSchema.optional()
}).strict();
export const StudentInClubUncheckedCreateWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedCreateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedCreateWithoutRoleInput>;
export const StudentInClubUncheckedCreateWithoutRoleInputObjectZodSchema = makeSchema();
