import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  clubId: z.literal(true).optional()
}).strict();
export const RoleInClubMinAggregateInputObjectSchema: z.ZodType<Prisma.RoleInClubMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubMinAggregateInputType>;
export const RoleInClubMinAggregateInputObjectZodSchema = makeSchema();
