import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminCreateManyInputObjectSchema as clubAdminCreateManyInputObjectSchema } from './objects/clubAdminCreateManyInput.schema';

export const clubAdminCreateManySchema: z.ZodType<Prisma.clubAdminCreateManyArgs> = z.object({ data: z.union([ clubAdminCreateManyInputObjectSchema, z.array(clubAdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.clubAdminCreateManyArgs>;

export const clubAdminCreateManyZodSchema = z.object({ data: z.union([ clubAdminCreateManyInputObjectSchema, z.array(clubAdminCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();