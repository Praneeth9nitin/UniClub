import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CollegeOrderByWithRelationInputObjectSchema as CollegeOrderByWithRelationInputObjectSchema } from './CollegeOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collegeId: SortOrderSchema.optional(),
  college: z.lazy(() => CollegeOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CollegeAdminOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CollegeAdminOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminOrderByWithRelationInput>;
export const CollegeAdminOrderByWithRelationInputObjectZodSchema = makeSchema();
