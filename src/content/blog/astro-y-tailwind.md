---
title: "Construyendo con Astro 5 y Tailwind CSS v4"
description: "Cómo configuré este portfolio con Astro 5 y Tailwind CSS v4, sin archivo de configuración de Tailwind y con el nuevo plugin de Vite."
pubDate: 2026-02-24
tags: ["astro", "tailwind", "tutorial"]
---

<div class="callout callout-info not-prose">
  <span class="callout-icon">ℹ️</span>
  <div>Este post documenta la configuración exacta que usé para construir este portfolio. Astro 5 + Tailwind v4 es una combinación relativamente nueva — algunos patrones que encontrarás en Google ya están desactualizados.</div>
</div>

Cuando empecé a construir este portfolio, quería algo rápido, sencillo y sin demasiada magia. Astro fue la elección obvia: genera HTML estático, tiene soporte nativo para Markdown, y se lleva bien con Tailwind.

## Tailwind v4: sin `tailwind.config.js`

La gran novedad de Tailwind CSS v4 es que ya **no necesitas un archivo de configuración**. La integración se hace directamente desde Vite:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://josluistanic.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Y en tu CSS global, solo necesitas una línea:

```css
@import "tailwindcss";
```

<div class="callout callout-warning not-prose">
  <span class="callout-icon">⚠️</span>
  <div>
    <strong>¡Ojo con los tutoriales viejos!</strong><br/>
    La mayoría de guías de Astro + Tailwind que encontrarás usan <code style="font-size:0.85em;padding:0.1em 0.3em;border-radius:0.25em;background:rgb(0 0 0/0.1)">@astrojs/tailwind</code> o el setup con <code style="font-size:0.85em;padding:0.1em 0.3em;border-radius:0.25em;background:rgb(0 0 0/0.1)">tailwind.config.js</code>. Ambos son el approach antiguo. En v4, ni el paquete <code style="font-size:0.85em;padding:0.1em 0.3em;border-radius:0.25em;background:rgb(0 0 0/0.1)">@astrojs/tailwind</code> es necesario.
  </div>
</div>

## Fuentes con Fontsource

Para la tipografía uso `Onest Variable` desde `@fontsource-variable/onest`. Solo hay que instalar el paquete e importarlo en el layout:

```ts
import "@fontsource-variable/onest";
```

Y aplicarlo en CSS:

```css
html {
  font-family: "Onest Variable", system-ui, sans-serif;
}
```

Fontsource sirve las fuentes localmente (sin petición a Google Fonts), lo que mejora privacidad y rendimiento.

## Content Layer API en Astro 5

Para el blog usé la nueva Content Layer API con el loader `glob`. La diferencia clave respecto a Astro 4:

<div class="not-prose" style="margin:1.5rem 0;border-radius:0.75rem;overflow:hidden;border:1px solid rgb(229 231 235)">
  <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
    <thead>
      <tr style="background:rgb(243 244 246)">
        <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:rgb(55 65 81)">Astro 4 (legacy)</th>
        <th style="padding:0.75rem 1rem;text-align:left;font-weight:600;color:rgb(55 65 81)">Astro 5 (Content Layer)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-top:1px solid rgb(229 231 235)">
        <td style="padding:0.75rem 1rem"><code>src/content/blog/</code> implícito</td>
        <td style="padding:0.75rem 1rem">loader <code>glob()</code> explícito</td>
      </tr>
      <tr style="border-top:1px solid rgb(229 231 235);background:rgb(249 250 251/0.5)">
        <td style="padding:0.75rem 1rem"><code>post.slug</code></td>
        <td style="padding:0.75rem 1rem"><code>post.id</code></td>
      </tr>
      <tr style="border-top:1px solid rgb(229 231 235)">
        <td style="padding:0.75rem 1rem"><code>post.render()</code></td>
        <td style="padding:0.75rem 1rem"><code>render(post)</code> desde <code>astro:content</code></td>
      </tr>
    </tbody>
  </table>
</div>

```ts
// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```

## Resultado

<div class="result-card not-prose">
  <p style="font-weight:600;margin-bottom:0.75rem;font-size:1.05rem;">✅ Lo que consigues con este stack</p>
  <ul style="display:flex;flex-direction:column;gap:0.4rem;padding-left:0;list-style:none;margin:0">
    <li style="display:flex;gap:0.5rem;align-items:center"><span style="color:rgb(234 179 8)">→</span> HTML estático, sin JS en el cliente</li>
    <li style="display:flex;gap:0.5rem;align-items:center"><span style="color:rgb(234 179 8)">→</span> Modo oscuro sin flicker (FOUC prevention)</li>
    <li style="display:flex;gap:0.5rem;align-items:center"><span style="color:rgb(234 179 8)">→</span> Blog en Markdown con tipado Zod</li>
    <li style="display:flex;gap:0.5rem;align-items:center"><span style="color:rgb(234 179 8)">→</span> RSS feed incluido</li>
    <li style="display:flex;gap:0.5rem;align-items:center"><span style="color:rgb(234 179 8)">→</span> Deploy automático a cPanel vía GitHub Actions</li>
  </ul>
</div>
