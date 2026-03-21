import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  clubId: z.literal(true).optional()
}).strict();
export const RoleInClubMaxAggregateInputObjectSchema: z.ZodType<Prisma.RoleInClubMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubMaxAggregateInputType>;
export const RoleInClubMaxAggregateInputObjectZodSchema = makeSchema();
