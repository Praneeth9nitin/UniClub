import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EventScalarRelationFilterObjectSchema as EventScalarRelationFilterObjectSchema } from './EventScalarRelationFilter.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { StudentScalarRelationFilterObjectSchema as StudentScalarRelationFilterObjectSchema } from './StudentScalarRelationFilter.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema'

const registrationswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistrationsWhereInputObjectSchema), z.lazy(() => RegistrationsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistrationsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistrationsWhereInputObjectSchema), z.lazy(() => RegistrationsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  studentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  event: z.union([z.lazy(() => EventScalarRelationFilterObjectSchema), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  student: z.union([z.lazy(() => StudentScalarRelationFilterObjectSchema), z.lazy(() => StudentWhereInputObjectSchema)]).optional()
}).strict();
export const RegistrationsWhereInputObjectSchema: z.ZodType<Prisma.RegistrationsWhereInput> = registrationswhereinputSchema as unknown as z.ZodType<Prisma.RegistrationsWhereInput>;
export const RegistrationsWhereInputObjectZodSchema = registrationswhereinputSchema;
