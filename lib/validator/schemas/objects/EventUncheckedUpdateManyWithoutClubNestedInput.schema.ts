import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutClubInputObjectSchema as EventCreateWithoutClubInputObjectSchema } from './EventCreateWithoutClubInput.schema';
import { EventUncheckedCreateWithoutClubInputObjectSchema as EventUncheckedCreateWithoutClubInputObjectSchema } from './EventUncheckedCreateWithoutClubInput.schema';
import { EventCreateOrConnectWithoutClubInputObjectSchema as EventCreateOrConnectWithoutClubInputObjectSchema } from './EventCreateOrConnectWithoutClubInput.schema';
import { EventUpsertWithWhereUniqueWithoutClubInputObjectSchema as EventUpsertWithWhereUniqueWithoutClubInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutClubInput.schema';
import { EventCreateManyClubInputEnvelopeObjectSchema as EventCreateManyClubInputEnvelopeObjectSchema } from './EventCreateManyClubInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutClubInputObjectSchema as EventUpdateWithWhereUniqueWithoutClubInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutClubInput.schema';
import { EventUpdateManyWithWhereWithoutClubInputObjectSchema as EventUpdateManyWithWhereWithoutClubInputObjectSchema } from './EventUpdateManyWithWhereWithoutClubInput.schema';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutClubInputObjectSchema), z.lazy(() => EventCreateWithoutClubInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutClubInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutClubInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutClubInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutClubInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EventUpsertWithWhereUniqueWithoutClubInputObjectSchema), z.lazy(() => EventUpsertWithWhereUniqueWithoutClubInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyClubInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EventUpdateWithWhereUniqueWithoutClubInputObjectSchema), z.lazy(() => EventUpdateWithWhereUniqueWithoutClubInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EventUpdateManyWithWhereWithoutClubInputObjectSchema), z.lazy(() => EventUpdateManyWithWhereWithoutClubInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EventUncheckedUpdateManyWithoutClubNestedInputObjectSchema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutClubNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedUpdateManyWithoutClubNestedInput>;
export const EventUncheckedUpdateManyWithoutClubNestedInputObjectZodSchema = makeSchema();
