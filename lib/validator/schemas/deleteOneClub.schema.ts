import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubSelectObjectSchema as ClubSelectObjectSchema } from './objects/ClubSelect.schema';
import { ClubIncludeObjectSchema as ClubIncludeObjectSchema } from './objects/ClubInclude.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './objects/ClubWhereUniqueInput.schema';

export const ClubDeleteOneSchema: z.ZodType<Prisma.ClubDeleteArgs> = z.object({ select: ClubSelectObjectSchema.optional(), include: ClubIncludeObjectSchema.optional(), where: ClubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClubDeleteArgs>;

export const ClubDeleteOneZodSchema = z.object({ select: ClubSelectObjectSchema.optional(), include: ClubIncludeObjectSchema.optional(), where: ClubWhereUniqueInputObjectSchema }).strict();