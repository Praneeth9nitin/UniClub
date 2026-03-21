import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const RegistrationsWhereUniqueInputObjectSchema: z.ZodType<Prisma.RegistrationsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsWhereUniqueInput>;
export const RegistrationsWhereUniqueInputObjectZodSchema = makeSchema();
