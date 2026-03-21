import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const registrationsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RegistrationsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RegistrationsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RegistrationsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RegistrationsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RegistrationsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  studentId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const RegistrationsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RegistrationsScalarWhereWithAggregatesInput> = registrationsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RegistrationsScalarWhereWithAggregatesInput>;
export const RegistrationsScalarWhereWithAggregatesInputObjectZodSchema = registrationsscalarwherewithaggregatesinputSchema;
