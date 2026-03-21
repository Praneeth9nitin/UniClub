import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema';
import { ClubUpdateWithoutEventsInputObjectSchema as ClubUpdateWithoutEventsInputObjectSchema } from './ClubUpdateWithoutEventsInput.schema';
import { ClubUncheckedUpdateWithoutEventsInputObjectSchema as ClubUncheckedUpdateWithoutEventsInputObjectSchema } from './ClubUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClubUpdateWithoutEventsInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const ClubUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.ClubUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateToOneWithWhereWithoutEventsInput>;
export const ClubUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
