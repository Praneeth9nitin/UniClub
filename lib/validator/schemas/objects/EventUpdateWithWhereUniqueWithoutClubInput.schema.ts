import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutClubInputObjectSchema as EventUpdateWithoutClubInputObjectSchema } from './EventUpdateWithoutClubInput.schema';
import { EventUncheckedUpdateWithoutClubInputObjectSchema as EventUncheckedUpdateWithoutClubInputObjectSchema } from './EventUncheckedUpdateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateWithoutClubInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutClubInputObjectSchema)])
}).strict();
export const EventUpdateWithWhereUniqueWithoutClubInputObjectSchema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutClubInput>;
export const EventUpdateWithWhereUniqueWithoutClubInputObjectZodSchema = makeSchema();
