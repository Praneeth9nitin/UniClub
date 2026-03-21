import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  collegeId: z.string()
}).strict();
export const CollegeAdminCreateManyInputObjectSchema: z.ZodType<Prisma.CollegeAdminCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminCreateManyInput>;
export const CollegeAdminCreateManyInputObjectZodSchema = makeSchema();
