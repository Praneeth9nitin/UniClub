import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminSelectObjectSchema as clubAdminSelectObjectSchema } from './objects/clubAdminSelect.schema';
import { clubAdminCreateManyInputObjectSchema as clubAdminCreateManyInputObjectSchema } from './objects/clubAdminCreateManyInput.schema';

export const clubAdminCreateManyAndReturnSchema: z.ZodType<Prisma.clubAdminCreateManyAndReturnArgs> = z.object({ select: clubAdminSelectObjectSchema.optional(), data: z.union([ clubAdminCreateManyInputObjectSchema, z.array(clubAdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminCreateManyAndReturnArgs>;

export const clubAdminCreateManyAndReturnZodSchema = z.object({ select: clubAdminSelectObjectSchema.optional(), data: z.union([ clubAdminCreateManyInputObjectSchema, z.array(clubAdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();