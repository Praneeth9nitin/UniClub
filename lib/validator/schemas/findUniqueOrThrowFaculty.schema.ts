import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultySelectObjectSchema as FacultySelectObjectSchema } from './objects/FacultySelect.schema';
import { FacultyIncludeObjectSchema as FacultyIncludeObjectSchema } from './objects/FacultyInclude.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';

export const FacultyFindUniqueOrThrowSchema: z.ZodType<Prisma.FacultyFindUniqueOrThrowArgs> = z.object({ select: FacultySelectObjectSchema.optional(), include: FacultyIncludeObjectSchema.optional(), where: FacultyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FacultyFindUniqueOrThrowArgs>;

export const FacultyFindUniqueOrThrowZodSchema = z.object({ select: FacultySelectObjectSchema.optional(), include: FacultyIncludeObjectSchema.optional(), where: FacultyWhereUniqueInputObjectSchema }).strict();