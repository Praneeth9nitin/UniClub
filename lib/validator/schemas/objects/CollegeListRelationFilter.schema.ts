import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CollegeWhereInputObjectSchema).optional(),
  some: z.lazy(() => CollegeWhereInputObjectSchema).optional(),
  none: z.lazy(() => CollegeWhereInputObjectSchema).optional()
}).strict();
export const CollegeListRelationFilterObjectSchema: z.ZodType<Prisma.CollegeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CollegeListRelationFilter>;
export const CollegeListRelationFilterObjectZodSchema = makeSchema();
