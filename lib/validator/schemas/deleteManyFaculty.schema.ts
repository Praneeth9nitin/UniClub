import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './objects/FacultyWhereInput.schema';

export const FacultyDeleteManySchema: z.ZodType<Prisma.FacultyDeleteManyArgs> = z.object({ where: FacultyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FacultyDeleteManyArgs>;

export const FacultyDeleteManyZodSchema = z.object({ where: FacultyWhereInputObjectSchema.optional() }).strict();