import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumstatusFilterObjectSchema as EnumstatusFilterObjectSchema } from './EnumstatusFilter.schema';
import { statusSchema } from '../enums/status.schema'

const studentinclubscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudentInClubScalarWhereInputObjectSchema), z.lazy(() => StudentInClubScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudentInClubScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudentInClubScalarWhereInputObjectSchema), z.lazy(() => StudentInClubScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clubId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  studentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumstatusFilterObjectSchema), statusSchema]).optional()
}).strict();
export const StudentInClubScalarWhereInputObjectSchema: z.ZodType<Prisma.StudentInClubScalarWhereInput> = studentinclubscalarwhereinputSchema as unknown as z.ZodType<Prisma.StudentInClubScalarWhereInput>;
export const StudentInClubScalarWhereInputObjectZodSchema = studentinclubscalarwhereinputSchema;
