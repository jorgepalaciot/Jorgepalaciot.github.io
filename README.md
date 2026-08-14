# jorgepalaciot.github.io

Portafolio personal de Jorge Palacio — Ingeniero Industrial. Sitio hecho con Jekyll para GitHub Pages,
bilingüe (ES/EN, autodetectado por el navegador) y con modo claro/oscuro automático.

## Estructura

```
index.md              → página de inicio (hero, sobre mí, proyectos, experiencia, servicios, contacto)
proyectos.md           → todos los proyectos con detalle
blog.md                → listado del blog (usa site.posts automáticamente)
_posts/                → artículos del blog (formato: AAAA-MM-DD-titulo.md)
_layouts/default.html  → nav + footer + toggles de idioma/tema, usado por todas las páginas
_layouts/post.html     → plantilla de cada artículo del blog
assets/css/main.css    → todos los estilos
assets/img/            → fotos del sitio (ver assets/img/README.md)
assets/files/          → tu CV en PDF (ver assets/files/README.md)
```

## Cómo publicar

1. Sube el contenido de esta carpeta a tu repositorio `jorgepalaciot.github.io` (reemplaza todo).
2. En GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Agrega tu foto en `assets/img/hero.jpg` y `assets/img/about.jpg` (ver `assets/img/README.md`).
4. Sube tu CV como `assets/files/CV-Jorge-Palacio.pdf` (ver `assets/files/README.md`).
5. Espera 1-2 minutos y tu sitio estará en `https://jorgepalaciot.github.io`.

## Escribir un nuevo artículo del blog

Crea un archivo en `_posts/` con el formato `AAAA-MM-DD-titulo-corto.md`:

```markdown
---
layout: post
title: "Título del artículo"
date: 2026-08-10
---
<div class="t-es-b" markdown="1">

Tu texto en español aquí.

</div>

<div class="t-en-b" markdown="1">

Your text in English here.

</div>
```

Se publica automáticamente en `/blog/` en cuanto haces push.

## Editar contenido

- **Textos del sitio**: cada frase tiene una versión `<span class="t-es">...</span>` (español)
  y `<span class="t-en">...</span>` (inglés) una al lado de la otra. Edita ambas para mantener el sitio bilingüe.
- **Proyectos**: agrega o edita tarjetas en `index.md` (sección `#proyectos`) y el detalle en `proyectos.md`.
- **Educación / objetivos académicos**: sección `#educacion` en `index.md`.
- **Contacto**: el formulario abre tu cliente de correo (no requiere backend, funciona gratis en GitHub Pages).
  Si más adelante quieres que envíe correos sin abrir el cliente de email, se puede conectar a un servicio
  como Formspree con una sola línea de cambio en el `action` del formulario.

## Idioma y tema

Ambos se detectan automáticamente (idioma del navegador / preferencia de modo oscuro del sistema) y el visitante
puede cambiarlos manualmente con los botones "ES/EN" y "☾/☀" del menú — su elección se recuerda en el navegador.
