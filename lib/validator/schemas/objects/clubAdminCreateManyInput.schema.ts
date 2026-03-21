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
export const clubAdminCreateManyInputObjectSchema: z.ZodType<Prisma.clubAdminCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminCreateManyInput>;
export const clubAdminCreateManyInputObjectZodSchema = makeSchema();
