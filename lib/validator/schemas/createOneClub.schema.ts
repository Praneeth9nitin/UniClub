import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubSelectObjectSchema as ClubSelectObjectSchema } from './objects/ClubSelect.schema';
import { ClubIncludeObjectSchema as ClubIncludeObjectSchema } from './objects/ClubInclude.schema';
import { ClubCreateInputObjectSchema as ClubCreateInputObjectSchema } from './objects/ClubCreateInput.schema';
import { ClubUncheckedCreateInputObjectSchema as ClubUncheckedCreateInputObjectSchema } from './objects/ClubUncheckedCreateInput.schema';

export const ClubCreateOneSchema: z.ZodType<Prisma.ClubCreateArgs> = z.object({ select: ClubSelectObjectSchema.optional(), include: ClubIncludeObjectSchema.optional(), data: z.union([ClubCreateInputObjectSchema, ClubUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ClubCreateArgs>;

export const ClubCreateOneZodSchema = z.object({ select: ClubSelectObjectSchema.optional(), include: ClubIncludeObjectSchema.optional(), data: z.union([ClubCreateInputObjectSchema, ClubUncheckedCreateInputObjectSchema]) }).strict();