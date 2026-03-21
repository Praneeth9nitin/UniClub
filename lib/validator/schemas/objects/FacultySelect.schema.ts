import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubFindManySchema as ClubFindManySchema } from '../findManyClub.schema';
import { CollegeArgsObjectSchema as CollegeArgsObjectSchema } from './CollegeArgs.schema';
import { FacultyCountOutputTypeArgsObjectSchema as FacultyCountOutputTypeArgsObjectSchema } from './FacultyCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  collegeId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  club: z.union([z.boolean(), z.lazy(() => ClubFindManySchema)]).optional(),
  college: z.union([z.boolean(), z.lazy(() => CollegeArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FacultyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FacultySelectObjectSchema: z.ZodType<Prisma.FacultySelect> = makeSchema() as unknown as z.ZodType<Prisma.FacultySelect>;
export const FacultySelectObjectZodSchema = makeSchema();
