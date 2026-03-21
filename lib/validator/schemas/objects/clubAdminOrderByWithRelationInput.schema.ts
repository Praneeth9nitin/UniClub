import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ClubOrderByWithRelationInputObjectSchema as ClubOrderByWithRelationInputObjectSchema } from './ClubOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional(),
  club: z.lazy(() => ClubOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const clubAdminOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.clubAdminOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminOrderByWithRelationInput>;
export const clubAdminOrderByWithRelationInputObjectZodSchema = makeSchema();
