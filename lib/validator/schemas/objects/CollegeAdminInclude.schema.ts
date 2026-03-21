import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeArgsObjectSchema as CollegeArgsObjectSchema } from './CollegeArgs.schema'

const makeSchema = () => z.object({
  college: z.union([z.boolean(), z.lazy(() => CollegeArgsObjectSchema)]).optional()
}).strict();
export const CollegeAdminIncludeObjectSchema: z.ZodType<Prisma.CollegeAdminInclude> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminInclude>;
export const CollegeAdminIncludeObjectZodSchema = makeSchema();
