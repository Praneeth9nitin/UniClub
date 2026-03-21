import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubCreateWithoutStudentsInputObjectSchema as ClubCreateWithoutStudentsInputObjectSchema } from './ClubCreateWithoutStudentsInput.schema';
import { ClubUncheckedCreateWithoutStudentsInputObjectSchema as ClubUncheckedCreateWithoutStudentsInputObjectSchema } from './ClubUncheckedCreateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClubCreateWithoutStudentsInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutStudentsInputObjectSchema)])
}).strict();
export const ClubCreateOrConnectWithoutStudentsInputObjectSchema: z.ZodType<Prisma.ClubCreateOrConnectWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubCreateOrConnectWithoutStudentsInput>;
export const ClubCreateOrConnectWithoutStudentsInputObjectZodSchema = makeSchema();
