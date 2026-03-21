import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StudentInClubCountOrderByAggregateInputObjectSchema as StudentInClubCountOrderByAggregateInputObjectSchema } from './StudentInClubCountOrderByAggregateInput.schema';
import { StudentInClubMaxOrderByAggregateInputObjectSchema as StudentInClubMaxOrderByAggregateInputObjectSchema } from './StudentInClubMaxOrderByAggregateInput.schema';
import { StudentInClubMinOrderByAggregateInputObjectSchema as StudentInClubMinOrderByAggregateInputObjectSchema } from './StudentInClubMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional(),
  studentId: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  _count: z.lazy(() => StudentInClubCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => StudentInClubMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => StudentInClubMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const StudentInClubOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.StudentInClubOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubOrderByWithAggregationInput>;
export const StudentInClubOrderByWithAggregationInputObjectZodSchema = makeSchema();
