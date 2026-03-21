import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeWhereInputObjectSchema as CollegeWhereInputObjectSchema } from './CollegeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CollegeWhereInputObjectSchema).optional()
}).strict();
export const StudentCountOutputTypeCountFollowsArgsObjectSchema = makeSchema();
export const StudentCountOutputTypeCountFollowsArgsObjectZodSchema = makeSchema();
