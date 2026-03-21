import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutEventsInputObjectSchema as ClubCreateWithoutEventsInputObjectSchema } from './ClubCreateWithoutEventsInput.schema';
import { ClubUncheckedCreateWithoutEventsInputObjectSchema as ClubUncheckedCreateWithoutEventsInputObjectSchema } from './ClubUncheckedCreateWithoutEventsInput.schema';
import { ClubCreateOrConnectWithoutEventsInputObjectSchema as ClubCreateOrConnectWithoutEventsInputObjectSchema } from './ClubCreateOrConnectWithoutEventsInput.schema';
import { ClubUpsertWithoutEventsInputObjectSchema as ClubUpsertWithoutEventsInputObjectSchema } from './ClubUpsertWithoutEventsInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateToOneWithWhereWithoutEventsInputObjectSchema as ClubUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './ClubUpdateToOneWithWhereWithoutEventsInput.schema';
import { ClubUpdateWithoutEventsInputObjectSchema as ClubUpdateWithoutEventsInputObjectSchema } from './ClubUpdateWithoutEventsInput.schema';
import { ClubUncheckedUpdateWithoutEventsInputObjectSchema as ClubUncheckedUpdateWithoutEventsInputObjectSchema } from './ClubUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutEventsInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClubCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => ClubUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => ClubWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClubUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => ClubUpdateWithoutEventsInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const ClubUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.ClubUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateOneRequiredWithoutEventsNestedInput>;
export const ClubUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
