import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const studentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => StudentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  lastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rollnumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  collegeId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const StudentScalarWhereInputObjectSchema: z.ZodType<Prisma.StudentScalarWhereInput> = studentscalarwhereinputSchema as unknown as z.ZodType<Prisma.StudentScalarWhereInput>;
export const StudentScalarWhereInputObjectZodSchema = studentscalarwhereinputSchema;
