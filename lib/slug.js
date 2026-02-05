import slugify from "slugify";
import { nanoid } from "nanoid";

export function generateSlug(title) {
  const baseSlug = slugify(title, {
    lower: true,
    strict: true,
    trim: true,
  });
  const uniquePart = nanoid(4);

  return `${baseSlug}-${uniquePart}`;
}
