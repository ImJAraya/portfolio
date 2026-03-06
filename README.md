# Portfolio - Jose Fabian Araya Montero

Portfolio profesional estático construido con Astro y Tailwind CSS, enfocado en oportunidades de empleo Full-Stack.

## Objetivo

Presentar experiencia, stack técnico y proyectos reales en una one-page rápida, responsive y optimizada para SEO.

## Stack técnico

- Astro 5
- JavaScript (ESM)
- Tailwind CSS
- Deploy estático en Netlify

## Secciones incluidas

- Hero
- Sobre mí
- Experiencia
- Proyectos destacados
- Stack técnico
- Educación
- Contacto

## Proyectos destacados

1. Equilibria (React + Flask + SQLAlchemy + JWT + OpenAI)
2. Elevate Dev Group (Astro + Tailwind)
3. Aprendamos Juntos CR (React + Vite + Netlify Functions)

## Estructura principal

```text
src/
  data/site.js              # Fuente única de contenido
  layouts/MainLayout.astro  # SEO, metadata y estructura base
  pages/index.astro         # One-page principal
  styles/global.css         # Estilos globales y sistema visual
public/
  favicon.svg
  og-cover.svg
  robots.txt
  sitemap.xml
astro.config.mjs
tailwind.config.mjs
netlify.toml
```

## Desarrollo local

```bash
npm install
npm run dev
```

Servidor local por defecto:

- `http://localhost:4321`

## Build de producción

```bash
npm run build
npm run preview
```

## Validación

```bash
npm run check
```

## Deploy en Netlify

Este proyecto ya incluye `netlify.toml` con la configuración mínima.

- Build command: `npm run build`
- Publish directory: `dist`

Pasos:

1. Crear un sitio nuevo en Netlify conectado al repositorio.
2. Confirmar el comando de build y el directorio de publicación.
3. Deploy.

## SEO y configuración de dominio

El sitio usa metadata SEO y JSON-LD desde `src/layouts/MainLayout.astro`, con URLs base definidas en `src/data/site.js`.

Antes de producción:

1. Actualizar `seo.url` al dominio real.
2. Actualizar `seo.image` si cambias la imagen OG.
3. Ajustar `public/robots.txt` y `public/sitemap.xml` al dominio final.

## Licencia

Uso personal/profesional del autor.
