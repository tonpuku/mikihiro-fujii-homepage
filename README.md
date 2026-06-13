# Mikihiro Fujii Homepage

Static academic homepage migrated from Google Sites.

## TeX Support

The site includes KaTeX locally under `assets/vendor/katex`, so pages do not depend on Google Fonts, Google Sites, or an external math CDN.

Supported delimiters:

- Inline math: `\( ... \)` or `$ ... $`
- Display math: `\[ ... \]` or `$$ ... $$`

Example:

```html
The critical space is $\dot{B}_{\infty,\sigma}^{-1}(\mathbb{R}^3)$.

$$
\partial_t u + (u\cdot\nabla)u - \Delta u + \nabla p = 0.
$$
```

## Local Preview

From this directory:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

Upload the full contents of this directory to any static web server. For accessibility from mainland China, prefer a university server or a hosting provider that has been verified from China, and keep the `assets` directory with the HTML files.

## Sources

Initial content was migrated from the public Google Site:

- https://sites.google.com/view/mikihirofujii/home
- https://sites.google.com/view/mikihirofujii/cv
- https://sites.google.com/view/mikihirofujii/research
- https://sites.google.com/view/mikihirofujii/lecture
- https://sites.google.com/view/mikihirofujii/links
