import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubArgsObjectSchema as ClubArgsObjectSchema } from './ClubArgs.schema';
import { RoleInClubArgsObjectSchema as RoleInClubArgsObjectSchema } from './RoleInClubArgs.schema';
import { StudentArgsObjectSchema as StudentArgsObjectSchema } from './StudentArgs.schema'

const makeSchema = () => z.object({
  club: z.union([z.boolean(), z.lazy(() => ClubArgsObjectSchema)]).optional(),
  role: z.union([z.boolean(), z.lazy(() => RoleInClubArgsObjectSchema)]).optional(),
  student: z.union([z.boolean(), z.lazy(() => StudentArgsObjectSchema)]).optional()
}).strict();
export const StudentInClubIncludeObjectSchema: z.ZodType<Prisma.StudentInClubInclude> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubInclude>;
export const StudentInClubIncludeObjectZodSchema = makeSchema();
