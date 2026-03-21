import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutClubInputObjectSchema as EventUpdateWithoutClubInputObjectSchema } from './EventUpdateWithoutClubInput.schema';
import { EventUncheckedUpdateWithoutClubInputObjectSchema as EventUncheckedUpdateWithoutClubInputObjectSchema } from './EventUncheckedUpdateWithoutClubInput.schema';
import { EventCreateWithoutClubInputObjectSchema as EventCreateWithoutClubInputObjectSchema } from './EventCreateWithoutClubInput.schema';
import { EventUncheckedCreateWithoutClubInputObjectSchema as EventUncheckedCreateWithoutClubInputObjectSchema } from './EventUncheckedCreateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EventUpdateWithoutClubInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutClubInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutClubInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutClubInputObjectSchema)])
}).strict();
export const EventUpsertWithWhereUniqueWithoutClubInputObjectSchema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutClubInput>;
export const EventUpsertWithWhereUniqueWithoutClubInputObjectZodSchema = makeSchema();
