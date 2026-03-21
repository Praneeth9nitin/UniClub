import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubFindManySchema as ClubFindManySchema } from '../findManyClub.schema';
import { CollegeArgsObjectSchema as CollegeArgsObjectSchema } from './CollegeArgs.schema';
import { FacultyCountOutputTypeArgsObjectSchema as FacultyCountOutputTypeArgsObjectSchema } from './FacultyCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  club: z.union([z.boolean(), z.lazy(() => ClubFindManySchema)]).optional(),
  college: z.union([z.boolean(), z.lazy(() => CollegeArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FacultyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FacultyIncludeObjectSchema: z.ZodType<Prisma.FacultyInclude> = makeSchema() as unknown as z.ZodType<Prisma.FacultyInclude>;
export const FacultyIncludeObjectZodSchema = makeSchema();
