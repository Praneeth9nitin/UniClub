import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacultyWhereInputObjectSchema).optional()
}).strict();
export const CollegeCountOutputTypeCountFacultyArgsObjectSchema = makeSchema();
export const CollegeCountOutputTypeCountFacultyArgsObjectZodSchema = makeSchema();
