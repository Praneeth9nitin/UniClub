import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClubOrderByRelationAggregateInputObjectSchema as ClubOrderByRelationAggregateInputObjectSchema } from './ClubOrderByRelationAggregateInput.schema';
import { CollegeOrderByWithRelationInputObjectSchema as CollegeOrderByWithRelationInputObjectSchema } from './CollegeOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  collegeId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  club: z.lazy(() => ClubOrderByRelationAggregateInputObjectSchema).optional(),
  college: z.lazy(() => CollegeOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FacultyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FacultyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyOrderByWithRelationInput>;
export const FacultyOrderByWithRelationInputObjectZodSchema = makeSchema();
