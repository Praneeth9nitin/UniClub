import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubArgsObjectSchema as ClubArgsObjectSchema } from './ClubArgs.schema';
import { RoleInClubArgsObjectSchema as RoleInClubArgsObjectSchema } from './RoleInClubArgs.schema';
import { StudentArgsObjectSchema as StudentArgsObjectSchema } from './StudentArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  clubId: z.boolean().optional(),
  studentId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  status: z.boolean().optional(),
  club: z.union([z.boolean(), z.lazy(() => ClubArgsObjectSchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => RoleInClubArgsObjectSchema)]).optional(),
  student: z.union([z.boolean(), z.lazy(() => StudentArgsObjectSchema)]).optional()
}).strict();
export const StudentInClubSelectObjectSchema: z.ZodType<Prisma.StudentInClubSelect> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubSelect>;
export const StudentInClubSelectObjectZodSchema = makeSchema();
