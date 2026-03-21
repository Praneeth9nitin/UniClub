import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutEventsInputObjectSchema as ClubCreateWithoutEventsInputObjectSchema } from './ClubCreateWithoutEventsInput.schema';
import { ClubUncheckedCreateWithoutEventsInputObjectSchema as ClubUncheckedCreateWithoutEventsInputObjectSchema } from './ClubUncheckedCreateWithoutEventsInput.schema';
import { ClubCreateOrConnectWithoutEventsInputObjectSchema as ClubCreateOrConnectWithoutEventsInputObjectSchema } from './ClubCreateOrConnectWithoutEventsInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutEventsInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClubCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => ClubWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClubCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.ClubCreateNestedOneWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateNestedOneWithoutEventsInput>;
export const ClubCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
