import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional()
}).strict();
export const CollegeWhereUniqueInputObjectSchema: z.ZodType<Prisma.CollegeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeWhereUniqueInput>;
export const CollegeWhereUniqueInputObjectZodSchema = makeSchema();
