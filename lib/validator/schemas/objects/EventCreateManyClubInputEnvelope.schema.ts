import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateManyClubInputObjectSchema as EventCreateManyClubInputObjectSchema } from './EventCreateManyClubInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EventCreateManyClubInputObjectSchema), z.lazy(() => EventCreateManyClubInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EventCreateManyClubInputEnvelopeObjectSchema: z.ZodType<Prisma.EventCreateManyClubInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyClubInputEnvelope>;
export const EventCreateManyClubInputEnvelopeObjectZodSchema = makeSchema();
