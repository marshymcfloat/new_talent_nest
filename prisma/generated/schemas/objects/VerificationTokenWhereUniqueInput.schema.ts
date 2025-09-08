import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema } from './VerificationTokenIdentifierTokenCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  token: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputObjectSchema).optional()
}).strict().superRefine((obj, ctx) => {
        const present = (k: string) => (obj as any)[k] != null;
        const singles: string[] = ["token"] as string[];
        const groups: string[][] = [["identifier","token"]] as string[][];

        const anySingle = Array.isArray(singles) && singles.length > 0 ? singles.some(present) : false;

        let anyComposite = false;
        if (Array.isArray(groups)) {
          for (const g of groups as string[][]) {
            if (!Array.isArray(g) || g.length === 0) continue;
            const count = (g as string[]).filter(present).length;
            if (count > 0 && count < g.length) {
              for (const f of g as string[]) {
                if (!present(f)) {
                  ctx.addIssue({ code: 'custom', message: 'All fields of composite unique must be provided', path: [f] });
                }
              }
            }
            if (count === g.length && g.length > 0) {
              anyComposite = true;
            }
          }
        }

        if (!anySingle && !anyComposite) {
          ctx.addIssue({ code: 'custom', message: 'Provide at least one unique selector' });
        }
      });
export const VerificationTokenWhereUniqueInputObjectSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenWhereUniqueInput>;
export const VerificationTokenWhereUniqueInputObjectZodSchema = makeSchema();
