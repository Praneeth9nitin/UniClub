import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CollegeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CollegeWhereInputObjectSchema).optional()
}).strict();
export const CollegeScalarRelationFilterObjectSchema: z.ZodType<Prisma.CollegeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CollegeScalarRelationFilter>;
export const CollegeScalarRelationFilterObjectZodSchema = makeSchema();
