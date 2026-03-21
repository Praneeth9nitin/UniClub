import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  rollnumber: z.string().optional()
}).strict();
export const StudentWhereUniqueInputObjectSchema: z.ZodType<Prisma.StudentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentWhereUniqueInput>;
export const StudentWhereUniqueInputObjectZodSchema = makeSchema();
