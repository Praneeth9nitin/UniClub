import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateNestedOneWithoutRegistrationsInputObjectSchema as EventCreateNestedOneWithoutRegistrationsInputObjectSchema } from './EventCreateNestedOneWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  event: z.lazy(() => EventCreateNestedOneWithoutRegistrationsInputObjectSchema)
}).strict();
export const RegistrationsCreateWithoutStudentInputObjectSchema: z.ZodType<Prisma.RegistrationsCreateWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateWithoutStudentInput>;
export const RegistrationsCreateWithoutStudentInputObjectZodSchema = makeSchema();
