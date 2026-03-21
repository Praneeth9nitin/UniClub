import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';
import { FacultyCreateWithoutClubInputObjectSchema as FacultyCreateWithoutClubInputObjectSchema } from './FacultyCreateWithoutClubInput.schema';
import { FacultyUncheckedCreateWithoutClubInputObjectSchema as FacultyUncheckedCreateWithoutClubInputObjectSchema } from './FacultyUncheckedCreateWithoutClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacultyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FacultyCreateWithoutClubInputObjectSchema), z.lazy(() => FacultyUncheckedCreateWithoutClubInputObjectSchema)])
}).strict();
export const FacultyCreateOrConnectWithoutClubInputObjectSchema: z.ZodType<Prisma.FacultyCreateOrConnectWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateOrConnectWithoutClubInput>;
export const FacultyCreateOrConnectWithoutClubInputObjectZodSchema = makeSchema();
