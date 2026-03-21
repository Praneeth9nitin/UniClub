import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  firstName: z.literal(true).optional(),
  lastName: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password: z.literal(true).optional(),
  clubId: z.literal(true).optional()
}).strict();
export const ClubAdminMinAggregateInputObjectSchema: z.ZodType<Prisma.ClubAdminMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClubAdminMinAggregateInputType>;
export const ClubAdminMinAggregateInputObjectZodSchema = makeSchema();
