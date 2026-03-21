import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminCreateManyInputObjectSchema as CollegeAdminCreateManyInputObjectSchema } from './objects/CollegeAdminCreateManyInput.schema';

export const CollegeAdminCreateManySchema: z.ZodType<Prisma.CollegeAdminCreateManyArgs> = z.object({ data: z.union([ CollegeAdminCreateManyInputObjectSchema, z.array(CollegeAdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CollegeAdminCreateManyArgs>;

export const CollegeAdminCreateManyZodSchema = z.object({ data: z.union([ CollegeAdminCreateManyInputObjectSchema, z.array(CollegeAdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();