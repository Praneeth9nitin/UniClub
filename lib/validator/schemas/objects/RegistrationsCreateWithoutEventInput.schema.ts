import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateNestedOneWithoutRegistrationsInputObjectSchema as StudentCreateNestedOneWithoutRegistrationsInputObjectSchema } from './StudentCreateNestedOneWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  student: z.lazy(() => StudentCreateNestedOneWithoutRegistrationsInputObjectSchema)
}).strict();
export const RegistrationsCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationsCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateWithoutEventInput>;
export const RegistrationsCreateWithoutEventInputObjectZodSchema = makeSchema();
