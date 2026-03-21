import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clubId: z.literal(true).optional(),
  studentId: z.literal(true).optional(),
  roleId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const StudentInClubCountAggregateInputObjectSchema: z.ZodType<Prisma.StudentInClubCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCountAggregateInputType>;
export const StudentInClubCountAggregateInputObjectZodSchema = makeSchema();
