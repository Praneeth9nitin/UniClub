import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultySelectObjectSchema as FacultySelectObjectSchema } from './objects/FacultySelect.schema';
import { FacultyCreateManyInputObjectSchema as FacultyCreateManyInputObjectSchema } from './objects/FacultyCreateManyInput.schema';

export const FacultyCreateManyAndReturnSchema: z.ZodType<Prisma.FacultyCreateManyAndReturnArgs> = z.object({ select: FacultySelectObjectSchema.optional(), data: z.union([ FacultyCreateManyInputObjectSchema, z.array(FacultyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FacultyCreateManyAndReturnArgs>;

export const FacultyCreateManyAndReturnZodSchema = z.object({ select: FacultySelectObjectSchema.optional(), data: z.union([ FacultyCreateManyInputObjectSchema, z.array(FacultyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();