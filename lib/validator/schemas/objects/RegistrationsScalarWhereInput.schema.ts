import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const registrationsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistrationsScalarWhereInputObjectSchema), z.lazy(() => RegistrationsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistrationsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistrationsScalarWhereInputObjectSchema), z.lazy(() => RegistrationsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  studentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const RegistrationsScalarWhereInputObjectSchema: z.ZodType<Prisma.RegistrationsScalarWhereInput> = registrationsscalarwhereinputSchema as unknown as z.ZodType<Prisma.RegistrationsScalarWhereInput>;
export const RegistrationsScalarWhereInputObjectZodSchema = registrationsscalarwhereinputSchema;
