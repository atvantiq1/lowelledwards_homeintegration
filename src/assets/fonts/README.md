# Fonts — TEMPORARY placeholders in use

`BASSET.ttf` and `FUTRST.ttf` in this folder are **stand-ins** (macOS system
fonts: Georgia and Trebuchet MS) so the site builds and previews correctly
before the real brand fonts are supplied.

When the client-provided files arrive, replace both files in place, keeping
the same filenames — no code changes are required, since
`src/lib/fonts.ts` loads them by these exact paths via `next/font/local`.
