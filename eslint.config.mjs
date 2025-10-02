import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Ignora variáveis não usadas
      "@typescript-eslint/no-unused-vars": "off",

      // Permite o uso de any (caso ainda não esteja incluso)
      "@typescript-eslint/no-explicit-any": "off",

      // Permite @ts-ignore
      "@typescript-eslint/ban-ts-comment": "off",

      // Permite <img> ao invés de forçar next/image
      "@next/next/no-img-element": "off",

      "react-hooks/rules-of-hooks": "off",

      // Ignora dependências faltantes em useEffect
      "react-hooks/exhaustive-deps": "off",

      // Permite entidades HTML não escapadas (ex: aspas duplas)
      "react/no-unescaped-entities": "off",
      "react/no-children-prop": "off",
      "@next/next/no-assign-module-variable": "off",
    },
  },
];
