import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutStudentsInputObjectSchema as ClubCreateWithoutStudentsInputObjectSchema } from './ClubCreateWithoutStudentsInput.schema';
import { ClubUncheckedCreateWithoutStudentsInputObjectSchema as ClubUncheckedCreateWithoutStudentsInputObjectSchema } from './ClubUncheckedCreateWithoutStudentsInput.schema';
import { ClubCreateOrConnectWithoutStudentsInputObjectSchema as ClubCreateOrConnectWithoutStudentsInputObjectSchema } from './ClubCreateOrConnectWithoutStudentsInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutStudentsInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClubCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  connect: z.lazy(() => ClubWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClubCreateNestedOneWithoutStudentsInputObjectSchema: z.ZodType<Prisma.ClubCreateNestedOneWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateNestedOneWithoutStudentsInput>;
export const ClubCreateNestedOneWithoutStudentsInputObjectZodSchema = makeSchema();
