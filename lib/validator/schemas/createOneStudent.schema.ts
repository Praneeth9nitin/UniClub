import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentSelectObjectSchema as StudentSelectObjectSchema } from './objects/StudentSelect.schema';
import { StudentIncludeObjectSchema as StudentIncludeObjectSchema } from './objects/StudentInclude.schema';
import { StudentCreateInputObjectSchema as StudentCreateInputObjectSchema } from './objects/StudentCreateInput.schema';
import { StudentUncheckedCreateInputObjectSchema as StudentUncheckedCreateInputObjectSchema } from './objects/StudentUncheckedCreateInput.schema';

export const StudentCreateOneSchema: z.ZodType<Prisma.StudentCreateArgs> = z.object({ select: StudentSelectObjectSchema.optional(), include: StudentIncludeObjectSchema.optional(), data: z.union([StudentCreateInputObjectSchema, StudentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StudentCreateArgs>;

export const StudentCreateOneZodSchema = z.object({ select: StudentSelectObjectSchema.optional(), include: StudentIncludeObjectSchema.optional(), data: z.union([StudentCreateInputObjectSchema, StudentUncheckedCreateInputObjectSchema]) }).strict();