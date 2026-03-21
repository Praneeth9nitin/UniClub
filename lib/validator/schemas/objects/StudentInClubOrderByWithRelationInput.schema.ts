import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ClubOrderByWithRelationInputObjectSchema as ClubOrderByWithRelationInputObjectSchema } from './ClubOrderByWithRelationInput.schema';
import { RoleInClubOrderByWithRelationInputObjectSchema as RoleInClubOrderByWithRelationInputObjectSchema } from './RoleInClubOrderByWithRelationInput.schema';
import { StudentOrderByWithRelationInputObjectSchema as StudentOrderByWithRelationInputObjectSchema } from './StudentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clubId: SortOrderSchema.optional(),
  studentId: SortOrderSchema.optional(),
  roleId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  club: z.lazy(() => ClubOrderByWithRelationInputObjectSchema).optional(),
  role: z.lazy(() => RoleInClubOrderByWithRelationInputObjectSchema).optional(),
  student: z.lazy(() => StudentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const StudentInClubOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StudentInClubOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubOrderByWithRelationInput>;
export const StudentInClubOrderByWithRelationInputObjectZodSchema = makeSchema();
