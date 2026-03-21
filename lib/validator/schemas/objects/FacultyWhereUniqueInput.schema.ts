import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string().optional()
}).strict();
export const FacultyWhereUniqueInputObjectSchema: z.ZodType<Prisma.FacultyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyWhereUniqueInput>;
export const FacultyWhereUniqueInputObjectZodSchema = makeSchema();
