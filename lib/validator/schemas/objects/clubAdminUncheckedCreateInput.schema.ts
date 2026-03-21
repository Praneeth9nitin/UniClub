import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  clubId: z.string()
}).strict();
export const clubAdminUncheckedCreateInputObjectSchema: z.ZodType<Prisma.clubAdminUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminUncheckedCreateInput>;
export const clubAdminUncheckedCreateInputObjectZodSchema = makeSchema();
