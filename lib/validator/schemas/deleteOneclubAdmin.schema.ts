import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminSelectObjectSchema as clubAdminSelectObjectSchema } from './objects/clubAdminSelect.schema';
import { clubAdminIncludeObjectSchema as clubAdminIncludeObjectSchema } from './objects/clubAdminInclude.schema';
import { clubAdminWhereUniqueInputObjectSchema as clubAdminWhereUniqueInputObjectSchema } from './objects/clubAdminWhereUniqueInput.schema';

export const clubAdminDeleteOneSchema: z.ZodType<Prisma.clubAdminDeleteArgs> = z.object({ select: clubAdminSelectObjectSchema.optional(), include: clubAdminIncludeObjectSchema.optional(), where: clubAdminWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.clubAdminDeleteArgs>;

export const clubAdminDeleteOneZodSchema = z.object({ select: clubAdminSelectObjectSchema.optional(), include: clubAdminIncludeObjectSchema.optional(), where: clubAdminWhereUniqueInputObjectSchema }).strict();