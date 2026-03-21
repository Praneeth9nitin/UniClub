import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  clubId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RoleInClubCountAggregateInputObjectSchema: z.ZodType<Prisma.RoleInClubCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCountAggregateInputType>;
export const RoleInClubCountAggregateInputObjectZodSchema = makeSchema();
