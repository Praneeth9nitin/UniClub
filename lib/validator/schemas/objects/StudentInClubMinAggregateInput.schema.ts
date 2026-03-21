import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  clubId: z.literal(true).optional(),
  studentId: z.literal(true).optional(),
  roleId: z.literal(true).optional(),
  status: z.literal(true).optional()
}).strict();
export const StudentInClubMinAggregateInputObjectSchema: z.ZodType<Prisma.StudentInClubMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubMinAggregateInputType>;
export const StudentInClubMinAggregateInputObjectZodSchema = makeSchema();
