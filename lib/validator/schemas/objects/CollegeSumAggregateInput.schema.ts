import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  establisedYear: z.literal(true).optional()
}).strict();
export const CollegeSumAggregateInputObjectSchema: z.ZodType<Prisma.CollegeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CollegeSumAggregateInputType>;
export const CollegeSumAggregateInputObjectZodSchema = makeSchema();
