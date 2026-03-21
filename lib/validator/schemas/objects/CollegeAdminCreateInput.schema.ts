import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeCreateNestedOneWithoutAdminInputObjectSchema as CollegeCreateNestedOneWithoutAdminInputObjectSchema } from './CollegeCreateNestedOneWithoutAdminInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string().optional().nullable(),
  college: z.lazy(() => CollegeCreateNestedOneWithoutAdminInputObjectSchema)
}).strict();
export const CollegeAdminCreateInputObjectSchema: z.ZodType<Prisma.CollegeAdminCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminCreateInput>;
export const CollegeAdminCreateInputObjectZodSchema = makeSchema();
