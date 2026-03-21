import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';
import { EventUpdateManyMutationInputObjectSchema as EventUpdateManyMutationInputObjectSchema } from './EventUpdateManyMutationInput.schema';
import { EventUncheckedUpdateManyWithoutClubInputObjectSchema as EventUncheckedUpdateManyWithoutClubInputObjectSchema } from './EventUncheckedUpdateManyWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateManyMutationInputObjectSchema), z.lazy(() => EventUncheckedUpdateManyWithoutClubInputObjectSchema)])
}).strict();
export const EventUpdateManyWithWhereWithoutClubInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithWhereWithoutClubInput>;
export const EventUpdateManyWithWhereWithoutClubInputObjectZodSchema = makeSchema();
