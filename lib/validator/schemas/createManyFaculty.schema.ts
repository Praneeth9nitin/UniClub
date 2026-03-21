import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultyCreateManyInputObjectSchema as FacultyCreateManyInputObjectSchema } from './objects/FacultyCreateManyInput.schema';

export const FacultyCreateManySchema: z.ZodType<Prisma.FacultyCreateManyArgs> = z.object({ data: z.union([ FacultyCreateManyInputObjectSchema, z.array(FacultyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FacultyCreateManyArgs>;

export const FacultyCreateManyZodSchema = z.object({ data: z.union([ FacultyCreateManyInputObjectSchema, z.array(FacultyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();