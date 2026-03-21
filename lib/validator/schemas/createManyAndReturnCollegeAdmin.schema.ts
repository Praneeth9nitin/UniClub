import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { CollegeAdminSelectObjectSchema as CollegeAdminSelectObjectSchema } from './objects/CollegeAdminSelect.schema';
import { CollegeAdminCreateManyInputObjectSchema as CollegeAdminCreateManyInputObjectSchema } from './objects/CollegeAdminCreateManyInput.schema';

export const CollegeAdminCreateManyAndReturnSchema: z.ZodType<Prisma.CollegeAdminCreateManyAndReturnArgs> = z.object({ select: CollegeAdminSelectObjectSchema.optional(), data: z.union([ CollegeAdminCreateManyInputObjectSchema, z.array(CollegeAdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CollegeAdminCreateManyAndReturnArgs>;

export const CollegeAdminCreateManyAndReturnZodSchema = z.object({ select: CollegeAdminSelectObjectSchema.optional(), data: z.union([ CollegeAdminCreateManyInputObjectSchema, z.array(CollegeAdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();