import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  collegeId: z.string().optional()
}).strict();
export const CollegeAdminWhereUniqueInputObjectSchema: z.ZodType<Prisma.CollegeAdminWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminWhereUniqueInput>;
export const CollegeAdminWhereUniqueInputObjectZodSchema = makeSchema();
