import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { StudentOrderByWithRelationInputObjectSchema as StudentOrderByWithRelationInputObjectSchema } from './StudentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  studentId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
  student: z.lazy(() => StudentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RegistrationsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RegistrationsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsOrderByWithRelationInput>;
export const RegistrationsOrderByWithRelationInputObjectZodSchema = makeSchema();
