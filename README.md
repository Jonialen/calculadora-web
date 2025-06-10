# Calculadora React UVG

Calculadora simple hecha en React + TypeScript, usando Bun y Vite.  
Incluye tests automáticos, linting estricto y Storybook para componentes.

## 🚀 Requisitos

- [Bun](https://bun.sh/) v1.0 o superior
- Node.js (solo para desarrollo, no para correr la app)
- Navegador moderno

## 📦 Instalación

Clona el repositorio y entra a la carpeta:

```bash
git clone <URL_DEL_REPO>
cd calculadora
bun install
```

## 🖥️ Correr la app

```bash
bun run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🧪 Tests

Corre todos los tests con:

```bash
bun run test
```

> **Nota:**  
> No uses `bun test`, usa `bun run test` o `bunx vitest`.

## 🧹 Linting

Verifica el código y corrige errores de estilo (sin punto y coma, máximo 120 caracteres por línea):

```bash
bun run lint
# o para corregir automáticamente:
bun run lint --fix
```

## 📚 Storybook

Visualiza y prueba los componentes de la calculadora:

```bash
bun run storybook
```

Abre [http://localhost:6006](http://localhost:6006) en tu navegador.

## 📄 Scripts útiles

| Comando              | Descripción                                 |
|----------------------|---------------------------------------------|
| `bun run dev`        | Corre la app en modo desarrollo             |
| `bun run build`      | Compila la app para producción              |
| `bun run test`       | Ejecuta los tests con Vitest                |
| `bun run lint`       | Linting del código                          |
| `bun run lint --fix` | Linting y auto-fix                          |
| `bun run storybook`  | Inicia Storybook                            |

## 🌐 Demo en línea

Puedes ver la calculadora funcionando en:  
**https://TU-DOMINIO.com/calculadora**

## 📝 Notas

- Todo el input se hace desde los botones de la calculadora.
- El display no muestra más de 9 caracteres.
- Si el resultado es negativo o mayor a 999,999,999, muestra `ERROR`.
- El código cumple con el estándar JavaScript Standard Style (sin punto y coma).
- No se usa `node_modules` en el repo.

---