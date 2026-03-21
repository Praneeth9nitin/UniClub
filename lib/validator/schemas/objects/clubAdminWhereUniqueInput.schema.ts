import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  clubId: z.string().optional()
}).strict();
export const clubAdminWhereUniqueInputObjectSchema: z.ZodType<Prisma.clubAdminWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminWhereUniqueInput>;
export const clubAdminWhereUniqueInputObjectZodSchema = makeSchema();
