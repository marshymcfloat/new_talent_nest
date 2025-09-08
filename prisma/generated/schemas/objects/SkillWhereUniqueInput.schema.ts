import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict().superRefine((obj, ctx) => {
        const present = (k: string) => (obj as any)[k] != null;
        const singles: string[] = ["id"] as string[];
        const groups: string[][] = [] as string[][];

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
export const SkillWhereUniqueInputObjectSchema: z.ZodType<Prisma.SkillWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillWhereUniqueInput>;
export const SkillWhereUniqueInputObjectZodSchema = makeSchema();
