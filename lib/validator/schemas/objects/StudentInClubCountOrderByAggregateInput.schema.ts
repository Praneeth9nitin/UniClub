import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional(),
  studentId: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional()
}).strict();
export const StudentInClubCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.StudentInClubCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCountOrderByAggregateInput>;
export const StudentInClubCountOrderByAggregateInputObjectZodSchema = makeSchema();
