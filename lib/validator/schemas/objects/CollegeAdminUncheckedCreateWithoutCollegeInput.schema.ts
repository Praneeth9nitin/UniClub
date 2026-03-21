import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string().optional().nullable()
}).strict();
export const CollegeAdminUncheckedCreateWithoutCollegeInputObjectSchema: z.ZodType<Prisma.CollegeAdminUncheckedCreateWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminUncheckedCreateWithoutCollegeInput>;
export const CollegeAdminUncheckedCreateWithoutCollegeInputObjectZodSchema = makeSchema();
