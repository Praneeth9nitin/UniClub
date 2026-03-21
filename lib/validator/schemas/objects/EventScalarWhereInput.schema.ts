import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnummodeFilterObjectSchema as EnummodeFilterObjectSchema } from './EnummodeFilter.schema';
import { modeSchema } from '../enums/mode.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumeventStatusFilterObjectSchema as EnumeventStatusFilterObjectSchema } from './EnumeventStatusFilter.schema';
import { eventStatusSchema } from '../enums/eventStatus.schema'

const eventscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  clubId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  time: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mode: z.union([z.lazy(() => EnummodeFilterObjectSchema), modeSchema]).optional(),
  registrationLink: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  registrationFee: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  registrationOpen: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deletedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  venue: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  banner: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  capacity: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  registrationDeadline: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  status: z.union([z.lazy(() => EnumeventStatusFilterObjectSchema), eventStatusSchema]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  category: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const EventScalarWhereInputObjectSchema: z.ZodType<Prisma.EventScalarWhereInput> = eventscalarwhereinputSchema as unknown as z.ZodType<Prisma.EventScalarWhereInput>;
export const EventScalarWhereInputObjectZodSchema = eventscalarwhereinputSchema;
