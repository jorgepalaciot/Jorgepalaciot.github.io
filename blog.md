---
layout: default
title: Blog
description: Artículos de Jorge Palacio sobre procesos, datos, automatización y operaciones.
permalink: /blog/
---
<div class="blog-container">
  <div class="blog-header">
    <span class="eyebrow"><span class="t-es">Artículos</span><span class="t-en">Writing</span></span>
    <h1><span class="t-es">Ideas sobre <em>procesos, datos y trabajo.</em></span><span class="t-en">Thoughts on <em>process, data & work.</em></span></h1>
    <p><span class="t-es">Escribo sobre operaciones, pensamiento de procesos y lo que he aprendido trabajando en distintas industrias y países.</span><span class="t-en">I write about operations, process thinking, and what I've learned working across different industries and countries.</span></p>
  </div>

  <ul class="post-list">
    {% for post in site.posts %}
    <li class="post-list-item">
      <div class="post-list-date">{{ post.date | date: "%d %b %Y" }}</div>
      <div class="post-list-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
      {% if post.excerpt %}
      <div class="post-list-excerpt">{{ post.excerpt | strip_html | truncatewords: 32 }}</div>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more"><span class="t-es">Leer más</span><span class="t-en">Read more</span> →</a>
    </li>
    {% else %}
    <p class="empty-note"><span class="t-es">Aún no hay artículos publicados. Vuelve pronto.</span><span class="t-en">No articles published yet. Check back soon.</span></p>
    {% endfor %}
  </ul>
</div>
