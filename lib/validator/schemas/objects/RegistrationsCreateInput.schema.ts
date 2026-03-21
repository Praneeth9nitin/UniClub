import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateNestedOneWithoutRegistrationsInputObjectSchema as EventCreateNestedOneWithoutRegistrationsInputObjectSchema } from './EventCreateNestedOneWithoutRegistrationsInput.schema';
import { StudentCreateNestedOneWithoutRegistrationsInputObjectSchema as StudentCreateNestedOneWithoutRegistrationsInputObjectSchema } from './StudentCreateNestedOneWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  event: z.lazy(() => EventCreateNestedOneWithoutRegistrationsInputObjectSchema),
  student: z.lazy(() => StudentCreateNestedOneWithoutRegistrationsInputObjectSchema)
}).strict();
export const RegistrationsCreateInputObjectSchema: z.ZodType<Prisma.RegistrationsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateInput>;
export const RegistrationsCreateInputObjectZodSchema = makeSchema();
