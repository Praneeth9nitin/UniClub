import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeArgsObjectSchema as CollegeArgsObjectSchema } from './CollegeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  phone: z.boolean().optional(),
  collegeId: z.boolean().optional(),
  college: z.union([z.boolean(), z.lazy(() => CollegeArgsObjectSchema)]).optional()
}).strict();
export const CollegeAdminSelectObjectSchema: z.ZodType<Prisma.CollegeAdminSelect> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminSelect>;
export const CollegeAdminSelectObjectZodSchema = makeSchema();
