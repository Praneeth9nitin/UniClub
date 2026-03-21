import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumstatusWithAggregatesFilterObjectSchema as EnumstatusWithAggregatesFilterObjectSchema } from './EnumstatusWithAggregatesFilter.schema';
import { statusSchema } from '../enums/status.schema'

const studentinclubscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => StudentInClubScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudentInClubScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudentInClubScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudentInClubScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => StudentInClubScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  clubId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  studentId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  roleId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumstatusWithAggregatesFilterObjectSchema), statusSchema]).optional()
}).strict();
export const StudentInClubScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.StudentInClubScalarWhereWithAggregatesInput> = studentinclubscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.StudentInClubScalarWhereWithAggregatesInput>;
export const StudentInClubScalarWhereWithAggregatesInputObjectZodSchema = studentinclubscalarwherewithaggregatesinputSchema;
