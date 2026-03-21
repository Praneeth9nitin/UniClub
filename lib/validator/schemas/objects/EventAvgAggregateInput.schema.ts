import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  registrationFee: z.literal(true).optional(),
  capacity: z.literal(true).optional()
}).strict();
export const EventAvgAggregateInputObjectSchema: z.ZodType<Prisma.EventAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventAvgAggregateInputType>;
export const EventAvgAggregateInputObjectZodSchema = makeSchema();
