import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutClubInputObjectSchema as EventCreateWithoutClubInputObjectSchema } from './EventCreateWithoutClubInput.schema';
import { EventUncheckedCreateWithoutClubInputObjectSchema as EventUncheckedCreateWithoutClubInputObjectSchema } from './EventUncheckedCreateWithoutClubInput.schema';
import { EventCreateOrConnectWithoutClubInputObjectSchema as EventCreateOrConnectWithoutClubInputObjectSchema } from './EventCreateOrConnectWithoutClubInput.schema';
import { EventCreateManyClubInputEnvelopeObjectSchema as EventCreateManyClubInputEnvelopeObjectSchema } from './EventCreateManyClubInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutClubInputObjectSchema), z.lazy(() => EventCreateWithoutClubInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutClubInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutClubInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutClubInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutClubInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyClubInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EventCreateNestedManyWithoutClubInputObjectSchema: z.ZodType<Prisma.EventCreateNestedManyWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedManyWithoutClubInput>;
export const EventCreateNestedManyWithoutClubInputObjectZodSchema = makeSchema();
