import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutClubInputObjectSchema as EventCreateWithoutClubInputObjectSchema } from './EventCreateWithoutClubInput.schema';
import { EventUncheckedCreateWithoutClubInputObjectSchema as EventUncheckedCreateWithoutClubInputObjectSchema } from './EventUncheckedCreateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutClubInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutClubInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutClubInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutClubInput>;
export const EventCreateOrConnectWithoutClubInputObjectZodSchema = makeSchema();
