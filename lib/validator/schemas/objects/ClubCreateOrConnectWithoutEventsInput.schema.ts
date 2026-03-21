import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubCreateWithoutEventsInputObjectSchema as ClubCreateWithoutEventsInputObjectSchema } from './ClubCreateWithoutEventsInput.schema';
import { ClubUncheckedCreateWithoutEventsInputObjectSchema as ClubUncheckedCreateWithoutEventsInputObjectSchema } from './ClubUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClubCreateWithoutEventsInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const ClubCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.ClubCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateOrConnectWithoutEventsInput>;
export const ClubCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
