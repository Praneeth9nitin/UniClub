import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyCreateWithoutClubInputObjectSchema as FacultyCreateWithoutClubInputObjectSchema } from './FacultyCreateWithoutClubInput.schema';
import { FacultyUncheckedCreateWithoutClubInputObjectSchema as FacultyUncheckedCreateWithoutClubInputObjectSchema } from './FacultyUncheckedCreateWithoutClubInput.schema';
import { FacultyCreateOrConnectWithoutClubInputObjectSchema as FacultyCreateOrConnectWithoutClubInputObjectSchema } from './FacultyCreateOrConnectWithoutClubInput.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FacultyCreateWithoutClubInputObjectSchema), z.lazy(() => FacultyUncheckedCreateWithoutClubInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FacultyCreateOrConnectWithoutClubInputObjectSchema).optional(),
  connect: z.lazy(() => FacultyWhereUniqueInputObjectSchema).optional()
}).strict();
export const FacultyCreateNestedOneWithoutClubInputObjectSchema: z.ZodType<Prisma.FacultyCreateNestedOneWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateNestedOneWithoutClubInput>;
export const FacultyCreateNestedOneWithoutClubInputObjectZodSchema = makeSchema();
