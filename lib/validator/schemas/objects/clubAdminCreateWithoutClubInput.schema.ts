import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string()
}).strict();
export const clubAdminCreateWithoutClubInputObjectSchema: z.ZodType<Prisma.clubAdminCreateWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminCreateWithoutClubInput>;
export const clubAdminCreateWithoutClubInputObjectZodSchema = makeSchema();
