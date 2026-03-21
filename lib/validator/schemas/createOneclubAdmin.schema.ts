import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { clubAdminSelectObjectSchema as clubAdminSelectObjectSchema } from './objects/clubAdminSelect.schema';
import { clubAdminIncludeObjectSchema as clubAdminIncludeObjectSchema } from './objects/clubAdminInclude.schema';
import { clubAdminCreateInputObjectSchema as clubAdminCreateInputObjectSchema } from './objects/clubAdminCreateInput.schema';
import { clubAdminUncheckedCreateInputObjectSchema as clubAdminUncheckedCreateInputObjectSchema } from './objects/clubAdminUncheckedCreateInput.schema';

export const clubAdminCreateOneSchema: z.ZodType<Prisma.clubAdminCreateArgs> = z.object({ select: clubAdminSelectObjectSchema.optional(), include: clubAdminIncludeObjectSchema.optional(), data: z.union([clubAdminCreateInputObjectSchema, clubAdminUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.clubAdminCreateArgs>;

export const clubAdminCreateOneZodSchema = z.object({ select: clubAdminSelectObjectSchema.optional(), include: clubAdminIncludeObjectSchema.optional(), data: z.union([clubAdminCreateInputObjectSchema, clubAdminUncheckedCreateInputObjectSchema]) }).strict();