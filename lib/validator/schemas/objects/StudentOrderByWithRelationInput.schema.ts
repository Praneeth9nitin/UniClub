import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RegistrationsOrderByRelationAggregateInputObjectSchema as RegistrationsOrderByRelationAggregateInputObjectSchema } from './RegistrationsOrderByRelationAggregateInput.schema';
import { CollegeOrderByWithRelationInputObjectSchema as CollegeOrderByWithRelationInputObjectSchema } from './CollegeOrderByWithRelationInput.schema';
import { StudentInClubOrderByRelationAggregateInputObjectSchema as StudentInClubOrderByRelationAggregateInputObjectSchema } from './StudentInClubOrderByRelationAggregateInput.schema';
import { CollegeOrderByRelationAggregateInputObjectSchema as CollegeOrderByRelationAggregateInputObjectSchema } from './CollegeOrderByRelationAggregateInput.schema';
import { ClubOrderByRelationAggregateInputObjectSchema as ClubOrderByRelationAggregateInputObjectSchema } from './ClubOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  firstName: SortOrderSchema.optional(),
  lastName: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  rollnumber: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  collegeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  registrations: z.lazy(() => RegistrationsOrderByRelationAggregateInputObjectSchema).optional(),
  college: z.lazy(() => CollegeOrderByWithRelationInputObjectSchema).optional(),
  clubs: z.lazy(() => StudentInClubOrderByRelationAggregateInputObjectSchema).optional(),
  follows: z.lazy(() => CollegeOrderByRelationAggregateInputObjectSchema).optional(),
  followsClub: z.lazy(() => ClubOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const StudentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.StudentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentOrderByWithRelationInput>;
export const StudentOrderByWithRelationInputObjectZodSchema = makeSchema();
