import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubUpdateWithoutEventsInputObjectSchema as ClubUpdateWithoutEventsInputObjectSchema } from './ClubUpdateWithoutEventsInput.schema';
import { ClubUncheckedUpdateWithoutEventsInputObjectSchema as ClubUncheckedUpdateWithoutEventsInputObjectSchema } from './ClubUncheckedUpdateWithoutEventsInput.schema';
import { ClubCreateWithoutEventsInputObjectSchema as ClubCreateWithoutEventsInputObjectSchema } from './ClubCreateWithoutEventsInput.schema';
import { ClubUncheckedCreateWithoutEventsInputObjectSchema as ClubUncheckedCreateWithoutEventsInputObjectSchema } from './ClubUncheckedCreateWithoutEventsInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClubUpdateWithoutEventsInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => ClubCreateWithoutEventsInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutEventsInputObjectSchema)]),
  where: z.lazy(() => ClubWhereInputObjectSchema).optional()
}).strict();
export const ClubUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.ClubUpsertWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpsertWithoutEventsInput>;
export const ClubUpsertWithoutEventsInputObjectZodSchema = makeSchema();
