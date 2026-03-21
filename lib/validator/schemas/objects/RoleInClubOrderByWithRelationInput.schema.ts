import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ClubOrderByWithRelationInputObjectSchema as ClubOrderByWithRelationInputObjectSchema } from './ClubOrderByWithRelationInput.schema';
import { StudentInClubOrderByRelationAggregateInputObjectSchema as StudentInClubOrderByRelationAggregateInputObjectSchema } from './StudentInClubOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional(),
  club: z.lazy(() => ClubOrderByWithRelationInputObjectSchema).optional(),
  members: z.lazy(() => StudentInClubOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const RoleInClubOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RoleInClubOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubOrderByWithRelationInput>;
export const RoleInClubOrderByWithRelationInputObjectZodSchema = makeSchema();
