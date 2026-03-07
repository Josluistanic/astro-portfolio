---
title: "3 patrones de Livewire que uso en todos mis proyectos"
description: "Patrones prácticos de Livewire 3 que me han ahorrado tiempo y dolores de cabeza en proyectos Laravel reales."
pubDate: 2026-03-01
tags: ["laravel", "livewire", "tutorial"]
---

Llevo tiempo trabajando con Livewire en proyectos Laravel y hay ciertos patrones que repito en casi todos los proyectos. Los comparto aquí porque son sencillos pero hacen una diferencia real.

<div class="callout callout-info not-prose">
  <span class="callout-icon">📋</span>
  <div>Los tres patrones que voy a mostrar requieren <strong>Livewire 3</strong>. Si usas Livewire 2, la sintaxis de atributos PHP (<code style="font-size:0.85em;padding:0.1em 0.3em;border-radius:0.25em;background:rgb(0 0 0/0.1)">#[...]</code>) no está disponible.</div>
</div>

---

## 1. Confirmación antes de eliminar con `#[Confirm]`

Livewire 3 trajo el atributo `#[Confirm]` para mostrar un diálogo de confirmación nativo antes de ejecutar una acción.

```php
use Livewire\Attributes\Confirm;

#[Confirm('¿Estás seguro de que quieres eliminar este elemento?')]
public function delete(int $id): void
{
    Model::destroy($id);
}
```

Sin JavaScript extra, sin modales complejos. El navegador muestra el `confirm()` nativo y solo continúa si el usuario acepta.

<div class="callout callout-tip not-prose">
  <span class="callout-icon">💡</span>
  <div>
    <strong>Pro tip:</strong> Puedes personalizar el mensaje de confirmación dinámicamente usando interpolación de PHP en el atributo, por ejemplo incluyendo el nombre del elemento que se va a eliminar.
  </div>
</div>

---

## 2. URL como fuente de verdad con `#[Url]`

Cuando tienes filtros o búsquedas, sincronizar el estado con la URL hace la experiencia mucho mejor: el usuario puede compartir el enlace con los filtros aplicados, y el botón de atrás funciona como se espera.

```php
use Livewire\Attributes\Url;

#[Url]
public string $search = '';

#[Url]
public string $status = 'active';
```

<div class="callout callout-warning not-prose">
  <span class="callout-icon">⚠️</span>
  <div>
    <strong>Cuidado con datos sensibles:</strong> No uses <code style="font-size:0.85em;padding:0.1em 0.3em;border-radius:0.25em;background:rgb(0 0 0/0.1)">#[Url]</code> en propiedades que contengan IDs internos o información que no quieres exponer en la URL del navegador.
  </div>
</div>

---

## 3. Lazy loading de componentes pesados

Si tienes un componente que hace queries costosas o carga mucha data, `lazy` evita que bloquee el render inicial de la página.

```html
<livewire:estadisticas-dashboard lazy />
```

El componente se renderiza en una segunda petición, después de que la página ya cargó. Para el usuario, la página aparece más rápido aunque la data tarde en llegar.

<div class="callout callout-tip not-prose">
  <span class="callout-icon">💡</span>
  <div>
    <strong>Pro tip:</strong> Puedes definir un placeholder mientras carga usando el método <code style="font-size:0.85em;padding:0.1em 0.3em;border-radius:0.25em;background:rgb(0 0 0/0.1)">placeholder()</code> en el componente, para mostrar un skeleton en lugar de un espacio en blanco.
  </div>
</div>

---

<div class="result-card not-prose">
  <p style="font-weight:600;margin-bottom:0.75rem;font-size:1.05rem;">🧠 Resumen</p>
  <ul style="display:flex;flex-direction:column;gap:0.5rem;padding-left:0;list-style:none;margin:0;font-size:0.9375rem">
    <li style="display:flex;gap:0.5rem"><span style="color:rgb(234 179 8);flex-shrink:0">→</span> <span><strong>#[Confirm]</strong> — confirmación nativa sin JS ni modales</span></li>
    <li style="display:flex;gap:0.5rem"><span style="color:rgb(234 179 8);flex-shrink:0">→</span> <span><strong>#[Url]</strong> — filtros persistentes en la URL, gratis</span></li>
    <li style="display:flex;gap:0.5rem"><span style="color:rgb(234 179 8);flex-shrink:0">→</span> <span><strong>lazy</strong> — páginas más rápidas sin refactoring</span></li>
  </ul>
</div>
