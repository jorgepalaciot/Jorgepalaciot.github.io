# jorgepalaciot.dev — sitio personal + blog

Sitio construido con **Jekyll**, pensado para publicarse gratis en **GitHub Pages**.

## Estructura

```
_config.yml        Configuración del sitio (título, descripción, permalinks)
_layouts/
  default.html      Plantilla base: header, nav, footer, toggles ES/EN y claro/oscuro
  post.html          Plantilla de cada artículo del blog
_posts/
  AAAA-MM-DD-titulo.md   Un archivo por artículo (ver ejemplo incluido)
assets/
  styles.css         Todo el diseño visual
  script.js          Idioma, tema, menú móvil, animaciones
  jorge-portrait.jpg, jorge-square.jpg, favicon.svg
index.html          Página de inicio (hero, enfoque, evidencia, caso de estudio,
                    experiencia, contacto)
blog.md             Página que lista todos los artículos (/blog/)
```

## Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `tu-usuario.github.io`, o cualquier
   nombre si vas a usar Project Pages).
2. Sube todos estos archivos a la raíz del repositorio.
3. En **Settings → Pages**, selecciona la rama (`main`) como fuente. GitHub
   construye el sitio automáticamente con Jekyll — no necesitas instalar nada.
4. Abre `_config.yml` y completa el campo `url` con tu dirección real
   (ej. `https://tu-usuario.github.io`) antes de publicar, para que las
   imágenes al compartir en redes sociales se vean bien.

## Cómo escribir un artículo nuevo

1. Crea un archivo dentro de `_posts/` con el nombre
   `AAAA-MM-DD-titulo-corto.md` (la fecha define el orden).
2. Encabézalo así:
   ```yaml
   ---
   title: "Título del artículo"
   description: "Resumen corto de una línea (opcional, aparece en la lista del blog)"
   ---
   ```
3. Escribe el contenido debajo en Markdown normal.
4. El artículo aparece automáticamente en `/blog/`, ordenado del más nuevo al
   más antiguo. No hay que tocar `blog.md`.

Hay un artículo de ejemplo en `_posts/2026-01-15-bienvenida.md` — puedes
editarlo o borrarlo.

## Ver el sitio en tu computadora antes de publicar (opcional)

Si tienes Ruby instalado:

```bash
gem install bundler jekyll
bundle init
echo 'gem "github-pages", group: :jekyll_plugins' >> Gemfile
bundle install
bundle exec jekyll serve
```

Y abre `http://localhost:4000`.
