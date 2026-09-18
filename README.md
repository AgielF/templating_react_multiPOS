# 🛒 InteliMart — Template React Multi-POS

> **Solusi Point of Sale Modern untuk UMKM Indonesia**
> Multi-Tenant · Multi-Outlet · Offline-First · Real-Time Reports

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📖 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Filosofi & Standar Ahli](#️-filosofi--standar-ahli)
- [Quick Start](#-quick-start)
- [Struktur Proyek](#-struktur-proyek)
- [Dokumentasi Standar](#-dokumentasi-standar)
  - [1. Semantic HTML](#1-semantic-html--html5-spec)
  - [2. Atomic Design](#2-atomic-design--brad-frost)
  - [3. CUBE CSS](#3-cube-css--andy-bell)
  - [4. JS Design Patterns](#4-js-design-patterns--addy-osmani)
  - [5. UX States](#5-ux-states--vitaly-friedman)
  - [6. Inclusive Components](#6-inclusive-components--heydon-pickering)
  - [7. WAI-ARIA](#7-wai-aria--scott-ohara--steve-faulkner)
- [Konvensi Kode](#-konvensi-kode)
- [Roadmap](#️-roadmap)
- [Lisensi](#-lisensi)

---

## 🎯 Tentang Proyek

**InteliMart** adalah template React JS profesional untuk membangun aplikasi Point of Sale (POS) multi-tenant dan multi-outlet. Dirancang khusus untuk UMKM Indonesia dengan fokus pada **kemudahan penggunaan**, **performa**, dan **aksesibilitas**.

### Fitur Utama

- ✅ **Multi-Tenant & Multi-Outlet** — Kelola banyak bisnis dan cabang dalam satu platform
- ✅ **Offline-First** — Tetap bisa transaksi tanpa internet
- ✅ **Real-Time Dashboard** — Laporan penjualan dan stok secara real-time
- ✅ **Dark Mode Native** — Dukungan penuh tema gelap via semantic tokens
- ✅ **Responsive Design** — Optimasi untuk desktop, tablet, dan mobile
- ✅ **Accessibility (WCAG AA)** — Dapat digunakan oleh semua orang
- ✅ **Type-Safe Runtime** — Validasi Zod + PropTypes + JSDoc IntelliSense
- ✅ **Production Ready** — ESLint, Prettier, Husky pre-commit hooks

### Stack Teknologi

| Layer | Teknologi | Versi | Fungsi |
|-------|-----------|-------|--------|
| **UI** | React | 18.3 | Component library |
| **Build** | Vite | 5.4 | Dev server & bundler |
| **Styling** | Tailwind CSS | 3.4 | Utility-first CSS |
| **State** | Zustand | 4.5 | Lightweight global state |
| **Data** | TanStack React Query | 5.56 | Server state & caching |
| **Form** | React Hook Form | 7.53 | Performant forms |
| **Validasi** | Zod | 3.23 | Runtime type checking |
| **HTTP** | Axios | 1.7 | API requests + interceptors |
| **Routing** | React Router | 6.26 | Client-side routing |
| **Type Safety** | PropTypes + JSDoc | — | Runtime checks + IDE hints |

---

## 🏛️ Filosofi & Standar Ahli

InteliMart dibangun dengan menerapkan **7 standar ahli frontend** yang saling melengkapi:

| # | Standar | Ahli | Lapisan | Fokus |
|---|---------|------|---------|-------|
| 1 | **Semantic HTML** | HTML5 Spec | Struktur | Aksesibilitas & SEO |
| 2 | **Atomic Design** | Brad Frost | Komponen | Reusability & Scalability |
| 3 | **CUBE CSS** | Andy Bell | Styling | Maintainability & Dark Mode |
| 4 | **JS Design Patterns** | Addy Osmani | Logic | Clean Code & Performance |
| 5 | **UX States** | Vitaly Friedman | Interaksi | User Feedback |
| 6 | **Inclusive Components** | Heydon Pickering | Komponen | Usability untuk Semua |
| 7 | **WAI-ARIA** | Scott O'Hara & Steve Faulkner | Aksesibilitas | Screen Reader Support |

### Mengapa 7 Standar Ini?

Ketujuh standar ini **tidak saling bertentangan**, melainkan **saling melengkapi** secara vertikal:

- **Semantic HTML** memberi fondasi struktur yang kokoh
- **Atomic Design** mengatur komponen dari atom hingga page
- **CUBE CSS** mengelola styling dengan design tokens dan dark mode
- **JS Design Patterns** memastikan kode JavaScript yang bersih
- **UX States** memberikan feedback jelas di setiap interaksi
- **Inclusive Components** menjamin komponen bisa dipakai semua orang
- **WAI-ARIA** melengkapi semantik HTML untuk screen reader

Hasilnya: aplikasi yang **performant**, **maintainable**, **accessible**, dan **scalable** untuk Multi-POS.

---

## 🚀 Quick Start

```bash
# 1. Clone repository
git clone https://github.com/username/intelimart-pos.git
cd intelimart-pos

# 2. Install dependencies
npm install

# 3. Salin env (sesuaikan API URL)
cp .env.example .env

# 4. Start development server
npm run dev
# → http://localhost:3000
```

### Scripts Tersedia

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Development server (port 3000) |
| `npm run build` | Build production |
| `npm run preview` | Preview production build |
| `npm run lint` | Cek ESLint (0 errors wajib) |
| `npm run lint:fix` | Auto-fix ESLint |
| `npm run format` | Format kode (Prettier) |
| `npm run format:check` | Cek format tanpa mengubah |

---

## 📁 Struktur Proyek

```
intelimart-pos/
├── src/
│   ├── app/                       # App bootstrap
│   │   ├── App.jsx               #   Root component
│   │   ├── router.jsx            #   Route definitions
│   │   ├── providers.jsx         #   QueryClient, ErrorBoundary
│   │   └── ErrorBoundary.jsx     #   Global error boundary
│   │
│   ├── core/                      # Logika inti (lintas-fitur)
│   │   ├── auth/                 #   Auth store, guards
│   │   ├── config/               #   Environment config
│   │   └── tenant/               #   Multi-tenant (planned)
│   │
│   ├── features/                  # Modul fitur (self-contained)
│   │   ├── landing/              #   Landing page
│   │   │   ├── components/       #     molecules + organisms
│   │   │   ├── hooks/            #     useFeatures, usePricing
│   │   │   ├── services/         #     API calls
│   │   │   ├── schemas/          #     Zod validation
│   │   │   ├── constants/        #     Static data
│   │   │   └── pages/            #     LandingPage
│   │   │
│   │   └── auth/                 #   Authentication
│   │       ├── components/       #     LoginForm, RegisterForm
│   │       ├── hooks/            #     useAuth, useAuthRedirect
│   │       ├── services/         #     authService
│   │       ├── schemas/          #     loginSchema, registerSchema
│   │       ├── constants/        #     AUTH_ROUTES, ROLES
│   │       └── pages/            #     Login, Register, ForgotPw
│   │
│   ├── shared/                    # Resource global
│   │   ├── components/
│   │   │   ├── atoms/            #     Button, Input, Badge, etc.
│   │   │   ├── molecules/        #     FormField, CardHeader
│   │   │   └── feedback/         #     ErrorState, EmptyState
│   │   ├── hooks/                #     useTheme, useMediaQuery
│   │   ├── lib/
│   │   │   ├── api/              #     axiosClient, interceptors
│   │   │   ├── utils/            #     cn(), format, storage
│   │   │   └── constants/        #     app, queryKeys
│   │   └── styles/               #     tokens.css, app.css
│   │
│   └── main.jsx                   # Entry point
│
├── .eslintrc.cjs                  # ESLint config
├── .prettierrc                    # Prettier config
├── tailwind.config.js             # Tailwind + brand colors
├── vite.config.js                 # Vite + path aliases
├── jsconfig.json                  # JS path aliases (IDE)
└── package.json
```

### Penjelasan Singkat

| Folder | Fungsi |
|--------|--------|
| `app/` | Bootstrap: routing, providers, error boundary |
| `core/` | Logika bisnis inti yang dipakai banyak fitur |
| `features/` | Modul fitur — setiap fitur punya components, hooks, services, schemas sendiri |
| `shared/` | Atoms, molecules, hooks, utils, dan styles yang dipakai di seluruh app |


---

## 📚 Dokumentasi Standar

### 1. Semantic HTML — HTML5 Spec

**Prinsip:** Gunakan elemen sesuai makna konten, bukan tampilan.

**Penerapan:**

```jsx
// ❌ Salah — div onClick tidak keyboard-accessible
<div onClick={handleClick}>Submit</div>

// ✅ Benar — button native
<section aria-labelledby="hero-heading">
  <h1 id="hero-heading">POS Modern untuk UMKM Indonesia</h1>
  <button onClick={handleClick}>Daftar Gratis</button>
</section>
```

**Manfaat Multi-POS:** SEO, screen reader navigasi antar landmark, kode self-documenting.

---

### 2. Atomic Design — Brad Frost

**Prinsip:** Bangun design system, bukan halaman.

**Hierarki:**

| Level | Lokasi | Contoh |
|-------|--------|--------|
| Atoms | `shared/components/atoms/` | Button, Input, Badge |
| Molecules | `shared/components/molecules/` | FormField, CardHeader |
| Organisms | `features/*/components/organisms/` | HeroSection, Navbar |
| Pages | `features/*/pages/` | LandingPage, LoginPage |

**Atom:**

```jsx
// src/shared/components/atoms/Button.jsx
const BUTTON_VARIANTS = Object.freeze({
  primary: 'bg-brand-500 text-white hover:bg-brand-600',
  secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
  outline: 'border-2 border-brand-500 text-brand-600',
  ghost: 'text-zinc-700 hover:bg-zinc-100',
  danger: 'bg-red-500 text-white hover:bg-red-600',
});

const Button = forwardRef(({ children, variant = 'primary', loading, ...props }, ref) => (
  <button
    ref={ref}
    disabled={props.disabled || loading}
    className={cn('inline-flex items-center gap-2 rounded-lg focus-ring', BUTTON_VARIANTS[variant])}
    aria-busy={loading}
    {...props}
  >
    {children}
  </button>
));
```

**Molecule:**

```jsx
// src/shared/components/molecules/FormField.jsx
const FormField = forwardRef(({ label, error, id, ...inputProps }, ref) => {
  const fieldId = id || inputProps.name;
  const errorId = `${fieldId}-error`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={fieldId}>{label}</label>
      <Input ref={ref} id={fieldId} error={!!error}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...inputProps} />
      {error && <p id={errorId} role="alert">{error}</p>}
    </div>
  );
});
```

**Manfaat Multi-POS:** Komponen reusable lintas fitur, konsistensi UI di seluruh halaman.

---

### 3. CUBE CSS — Andy Bell

**Prinsip:** Composition over inheritance, utility over specificity.

**4 Lapisan:**

| Lapisan | Fungsi | Contoh |
|---------|--------|--------|
| Composition | Layout pattern | `.container-app`, `.section-padding` |
| Utility | Class kecil 1 tugas | `mt-4`, `text-center` |
| Block | Komponen utuh | `.card`, `.button` |
| Exception | Variasi khusus | `.card--brand` |

**Design Tokens:**

```css
/* src/shared/styles/tokens.css */
@layer base {
  :root {
    --color-brand-500: 249 115 22;
    --color-surface-base: 255 255 255;
    --color-content-primary: 24 24 27;
    --color-border-default: 212 212 216;
    --space-section: 5rem;
  }

  .dark {
    --color-surface-base: 9 9 11;
    --color-content-primary: 250 250 250;
    --color-border-default: 63 63 70;
  }
}
```

**Hard-coded vs Tokens:**

```css
/* ❌ Salah — duplikasi & tidak scalable */
.button { background: #f97316; }
.header-cta { background: #f97316; }

/* ✅ Benar — 1 sumber kebenaran */
.button { background: rgb(var(--color-brand-500)); }
.header-cta { background: rgb(var(--color-brand-500)); }
```

Multi-tenant: Setiap tenant punya 1 file token berbeda (`tenant-warung.css`, `tenant-toko.css`). Komponen tetap sama, hanya token yang berubah.

**cn() Utility:**

```js
// src/shared/lib/utils/cn.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

- `clsx` → gabung class kondisional
- `twMerge` → selesaikan konflik Tailwind (`bg-blue-500 bg-red-500` → `bg-red-500`)

**Manfaat Multi-POS:** Theming per tenant, dark mode dengan 1 set token, konsistensi.

---

### 4. JS Design Patterns — Addy Osmani

**Prinsip:** Tulis JavaScript yang scalable dan maintainable.

**5 Pattern:**

| Pattern | Lokasi | Fungsi |
|---------|--------|--------|
| Factory | `axiosClient.js` | HTTP client config standar |
| Observer | `useTheme.js`, store | Reactive state |
| Module | Setiap file ES6 | Isolasi scope |
| Custom Hook | `hooks/*.js` | Encapsulate logic |
| Singleton | `axiosClient`, `queryClient` | 1 instance per app |

**Factory Pattern:**

```js
// ❌ Salah — duplikasi & global mutable
let apiUrl = 'https://api.example.com';
function fetchData() { return fetch(apiUrl + '/data'); }

// ✅ Benar — 1 sumber konfigurasi
// src/shared/lib/api/axiosClient.js
export const axiosClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: env.apiTimeout,
  headers: { 'Content-Type': 'application/json' },
});

// Pemakaian:
import { axiosClient } from '@shared/lib/api/axiosClient';
export const fetchFeatures = () => axiosClient.get('/features');
```

**Observer Pattern:**

```js
// src/shared/hooks/useTheme.js
const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'system',
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light',
      })),
    }),
    { name: STORAGE_KEYS.THEME }
  )
);

export function useTheme() {
  return useThemeStore();
}
// Semua komponen yang pakai useTheme() otomatis re-render
```

**Custom Hook Pattern:**

```js
// src/features/landing/hooks/useFeatures.js
export function useFeatures() {
  return useQuery({
    queryKey: QUERY_KEYS.FEATURES,
    queryFn: fetchFeatures,
    staleTime: 10 * 60 * 1000,
  });
}
```

**Manfaat Multi-POS:** Separation of concerns, caching otomatis, testability.

---

### 5. UX States — Vitaly Friedman

**Prinsip:** Desain semua state, bukan hanya happy path.

**State wajib:**

| State | Komponen | Trigger |
|-------|----------|---------|
| Loading | Skeleton, Spinner | Fetch berjalan |
| Error | ErrorState | Fetch gagal |
| Empty | EmptyState | Data kosong |
| Disabled | Button, Input | Form invalid/loading |
| Success | Komponen utama | Fetch berhasil |

**Implementasi:**

```jsx
// ❌ Salah — hanya happy path, crash saat loading
function FeatureList() {
  const { data } = useFeatures();
  return data.map((f) => <FeatureCard key={f.id} {...f} />);
}

// ✅ Benar — handle semua state
function FeaturesSection() {
  const { data, isLoading, isError, error, refetch } = useFeatures();

  if (isLoading) return <Skeleton className="h-64" />;
  if (isError) return <ErrorState message={error?.message} onRetry={refetch} />;
  if (!data?.length) return <EmptyState title="Belum ada fitur" />;

  return data.map((f) => <FeatureCard key={f.id} {...f} />);
}
```

**ErrorState Component:**

```jsx
// src/shared/components/feedback/ErrorState.jsx
function ErrorState({ title, message, onRetry }) {
  return (
    <div role="alert" aria-live="assertive" className="text-center py-12">
      <svg aria-hidden="true" className="w-16 h-16 text-red-500" />
      <h3>{title}</h3>
      <p>{message}</p>
      {onRetry && <Button onClick={onRetry}>Coba Lagi</Button>}
    </div>
  );
}
```

**Manfaat Multi-POS:** Trust (kasir tahu status data), recovery (retry tanpa refresh), perceived speed.

---

### 6. Inclusive Components — Heydon Pickering

**Prinsip:** Komponen harus bisa dipakai semua orang secara default.

**5 Prinsip:**

1. Keyboard Navigation — Semua elemen interaktif dijangkau via Tab
2. Focus Ring — Indikator fokus jelas
3. Label & Error Asosiasi — `htmlFor`/`id` + `aria-describedby`
4. Color Contrast — WCAG AA (4.5:1)
5. Disabled Feedback — `opacity-50` + `cursor-not-allowed`

**Keyboard Navigation:**

| Elemen | Bisa di-Tab? | Bisa diaktifkan? |
|--------|-------------|------------------|
| `<button>` | ✅ | Enter, Space |
| `<a href>` | ✅ | Enter |
| `<input>` | ✅ | Ketik |
| `<div>` | ❌ | — |
| `<span>` | ❌ | — |

```jsx
// ❌ Salah — div tidak bisa di-Tab
<div onClick={handleClick}>Submit</div>

// ✅ Benar — button native
<button onClick={handleClick}>Submit</button>
```

**Focus Ring:**

```css
/* src/shared/styles/app.css */
.focus-ring {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus-ring:focus-visible {
  outline: 2px solid rgb(249 115 22); /* brand-500 */
  outline-offset: 2px;
}
.dark .focus-ring:focus-visible {
  outline-color: rgb(251 146 60); /* brand-400 */
}
```

`:focus-visible` muncul hanya saat keyboard navigation, tidak saat klik mouse.

**Input dengan Label + Error:**

```jsx
// ❌ Salah — tanpa label, error tidak terasosiasi
<input placeholder="Email" />
{error && <span style={{color: 'red'}}>{error}</span>}

// ✅ Benar
<label htmlFor="email">Email</label>
<input
  id="email"
  aria-invalid={!!error}
  aria-describedby={error ? 'email-error' : undefined}
  className="focus-ring"
/>
{error && <p id="email-error" role="alert">{error}</p>}
```

**Manfaat Multi-POS:** Kasir dengan keterbatasan fisik tetap bisa kerja, power user bisa input cepat tanpa mouse, memenuhi WCAG AA.

---

### 7. WAI-ARIA — Scott O'Hara & Steve Faulkner

**Prinsip:** Pakai semantic HTML dulu, ARIA hanya jika HTML native tidak cukup.

**5 Aturan ARIA:**

1. HTML dulu, ARIA kemudian
2. Jangan ubah semantik native
3. ARIA interaktif harus keyboard-accessible
4. Jangan sembunyikan elemen fokusable
5. Semua elemen interaktif harus punya nama

**ARIA Attributes:**

| Attribute | Lokasi | Fungsi |
|-----------|--------|--------|
| `aria-labelledby` | HeroSection | Hubungkan section ke heading |
| `aria-busy` | Button | Announce loading |
| `aria-invalid` | Input, FormField | Announce invalid field |
| `aria-describedby` | FormField | Link input ke error text |
| `aria-hidden` | Icon SVG, Spinner | Sembunyikan dekorasi |
| `aria-live` | ErrorState, EmptyState | Announce perubahan |
| `aria-label` | Required indicator | Label untuk elemen tanpa text |
| `role="alert"` | Error messages | Immediate announcement |

**❌ Salah:**

```jsx
// role="button" hanya label, tidak menambah behavior
<div role="button" onClick={handleClick}>Click</div>
// ↑ Tidak bisa di-Tab, tidak bisa diaktifkan dengan Enter

// aria-live="assertive" terlalu agresif untuk loading
<div aria-live="assertive">Loading...</div>
```

**✅ Benar:**

```jsx
// Button dengan loading state
<button disabled={loading} aria-busy={loading} {...props}>
  {loading && <svg aria-hidden="true" />}
  {children}
</button>

// ErrorState — assertive karena error kritis
<div role="alert" aria-live="assertive">
  <svg aria-hidden="true" />
  <h3>{title}</h3>
  <p>{message}</p>
</div>

// EmptyState — polite karena info ringan
<div role="status" aria-live="polite">
  {icon && <div aria-hidden="true">{icon}</div>}
  <h3>{title}</h3>
  <p>{description}</p>
</div>
```

**Perbedaan aria-live:**

- `polite` → tunggu user selesai baca (info ringan: empty state)
- `assertive` → langsung potong (error kritis)

**Manfaat Multi-POS:** Screen reader support untuk tunanetra, error announcement langsung, live region untuk perubahan stok/harga.

---

## 🧭 Konvensi Kode

### Naming Convention

| Element | Convention | Contoh |
|---------|-----------|--------|
| Component | PascalCase | `Button`, `HeroSection` |
| File component | PascalCase.jsx | `Button.jsx` |
| File utility | camelCase.js | `cn.js`, `format.js` |
| Function | camelCase | `handleSubmit` |
| Constant | UPPER_SNAKE_CASE | `BUTTON_VARIANTS` |
| Hook | use + PascalCase | `useTheme`, `useFeatures` |
| Prop | camelCase | `variant`, `isLoading` |
| CSS Token | kebab-case | `--color-brand-500` |

### Type Safety 3 Lapis

| Lapis | Kapan Aktif | Tugas |
|-------|------------|-------|
| JSDoc | Saat menulis kode | IDE IntelliSense |
| PropTypes | Runtime development | Validasi props |
| Zod | Runtime | Validasi data API & form |

**1. JSDoc:**

```jsx
/**
 * Button Component - Atomic Design: Atom
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'primary'|'secondary'|'outline'|'ghost'|'danger'} props.variant
 */
function Button({ children, variant = 'primary' }) { /* ... */ }
```

**2. PropTypes:**

```jsx
import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
```

**3. Zod:**

```js
// Validasi form
const loginSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

// Validasi response API
const featuresResponseSchema = z.object({
  data: z.array(featureSchema),
  total: z.number(),
});

const parsed = featuresResponseSchema.safeParse(raw.data);
if (!parsed.success) throw new Error('Response API tidak sesuai schema');
```

### ESLint + Prettier

| Tool | Tugas | Fokus |
|------|-------|-------|
| ESLint | Cek kualitas kode | Benar/salah logika |
| Prettier | Rapikan format | Konsistensi visual |

```js
// .eslintrc.cjs
{
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'import/order': ['warn', { 'newlines-between': 'always' }],
  },
}
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Path Aliases

```jsx
// ❌ Salah — panjang & mudah salah
import { Button } from '../../../../shared/components/atoms/Button';

// ✅ Benar — pendek & jelas
import { Button } from '@shared/components/atoms';
```

Setup 2 file:

```js
// vite.config.js — untuk build tool
resolve: {
  alias: {
    '@app': path.resolve(__dirname, './src/app'),
    '@features': path.resolve(__dirname, './src/features'),
    '@shared': path.resolve(__dirname, './src/shared'),
    '@core': path.resolve(__dirname, './src/core'),
  },
}
```

```json
// jsconfig.json — untuk IDE
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@app/*": ["src/app/*"],
      "@features/*": ["src/features/*"],
      "@shared/*": ["src/shared/*"],
      "@core/*": ["src/core/*"]
    }
  }
}
```

**Alias tersedia:**

| Alias | Path |
|-------|------|
| `@app` | `./src/app` |
| `@features` | `./src/features` |
| `@shared` | `./src/shared` |
| `@core` | `./src/core` |

#### Penerapan di InteliMart

- `<section>` dengan `aria-labelledby` untuk setiap blok konten
- `<nav>` untuk navigasi, `<button>` untuk aksi, `<a>` untuk link
- Heading hierarchy (`h1` → `h2` → `h3`) konsisten di setiap halaman
- `<form>`, `<label>`, `<input>` dengan asosiasi `htmlFor`/`id` yang benar

#### ❌ Salah

```jsx
<div onClick={handleClick}>Submit</div>
<div className="title">Judul Halaman</div>
<span onClick={goTo}>Lihat detail</span>
```

#### ✅ Benar

```jsx
// src/features/landing/components/organisms/HeroSection.jsx
<section
  className="relative pt-32 pb-20 lg:pt-40 lg:pb-28"
  aria-labelledby="hero-heading"
>
  <div className="container-app">
    <h1
      id="hero-heading"
      className="text-4xl md:text-5xl lg:text-6xl font-bold"
    >
      POS Modern untuk
      <span className="text-brand-500">UMKM Indonesia</span>
    </h1>

    <p className="text-lg text-zinc-600 dark:text-zinc-400">
      Kelola penjualan, stok, dan laporan bisnis Anda.
    </p>

    <Button variant="primary" size="lg">
      Daftar Gratis Sekarang
    </Button>
  </div>
</section>
```

#### Manfaat untuk Multi-POS

- **SEO** — Mesin pencari memahami struktur konten landing page
- **Aksesibilitas** — Screen reader menavigasi section-per-section
- **Maintainability** — Kode menceritakan *apa*, bukan *bagaimana tampil*


---

### 2. Atomic Design — Brad Frost

> **Prinsip:** *"Create design systems, not pages."*

#### Penerapan di InteliMart

| Level | Lokasi | Contoh |
|-------|--------|--------|
| **Atoms** | `shared/components/atoms/` | Button, Input, Badge, Spinner, Skeleton |
| **Molecules** | `shared/components/molecules/` | FormField, CardHeader |
| **Organisms** | `features/*/components/organisms/` | HeroSection, Navbar, FeaturesSection |
| **Pages** | `features/*/pages/` | LandingPage, LoginPage, RegisterPage |

#### ❌ Salah

```jsx
// Komponen monolitik — sulit di-reuse & di-test
function LoginPage() {
  return (
    <div>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
```

#### ✅ Benar — Atom

```jsx
// src/shared/components/atoms/Button.jsx
const BUTTON_VARIANTS = Object.freeze({
  primary: 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700',
  secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
  outline: 'border-2 border-brand-500 text-brand-600 hover:bg-brand-50',
  ghost: 'text-zinc-700 hover:bg-zinc-100',
  danger: 'bg-red-500 text-white hover:bg-red-600',
});

const Button = forwardRef(
  ({ children, variant = 'primary', size = 'md',
     disabled, loading, className, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'rounded-lg font-medium transition-colors focus-ring',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className
      )}
      aria-busy={loading}
      {...props}
    >
      {loading && <svg className="animate-spin h-4 w-4" aria-hidden="true">…</svg>}
      {children}
    </button>
  )
);
```

#### ✅ Benar — Molecule

```jsx
// src/shared/components/molecules/FormField.jsx
const FormField = forwardRef(
  ({ label, error, helperText, required, id, ...inputProps }, ref) => {
    const fieldId = id || inputProps.name;
    const errorId = `${fieldId}-error`;

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={fieldId} className="block text-sm font-medium">
            {label}
            {required && <span className="text-red-500" aria-label="required">*</span>}
          </label>
        )}
        <Input ref={ref} id={fieldId} error={!!error}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...inputProps} />
        {error && (
          <p id={errorId} className="text-sm text-red-600" role="alert">{error}</p>
        )}
      </div>
    );
  }
);
```

#### Manfaat untuk Multi-POS

- **Reusability** — `Button`, `FormField` dipakai di landing, auth, dan nanti POS
- **Consistency** — Form outlet, kasir, laporan tampil seragam
- **Testability** — Atom bisa di-test independen dari halaman


---

### 3. CUBE CSS — Andy Bell

> **Prinsip:** *"Composition over inheritance, utility over specificity."*

#### Penerapan di InteliMart

- **Design Tokens** di `tokens.css` — semantic variable untuk warna, spacing, radius
- **Dark Mode** — Override token di `.dark {}`, seluruh UI berubah otomatis
- **Tailwind Utility** — Composable classes, bukan custom CSS monolitik
- **`cn()` helper** — Gabungkan classes secara aman (clsx + tailwind-merge)

#### ❌ Salah

```css
/* Hard-coded, tidak scalable */
.button { background: #f97316; color: #fff; padding: 12px 24px; }
.button-dark { background: #ea580c; }
```

#### ✅ Benar — Design Tokens

```css
/* src/shared/styles/tokens.css */
@layer base {
  :root {
    --color-brand-500: 249 115 22;
    --color-surface-base: 255 255 255;
    --color-content-primary: 24 24 27;
    --color-border-default: 212 212 216;
    --color-error: 239 68 68;
    --space-section: 5rem;
    --radius-lg: 1rem;
    --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .dark {
    --color-surface-base: 9 9 11;
    --color-content-primary: 250 250 250;
    --color-border-default: 63 63 70;
    --color-error: 248 113 113;
  }
}
```

#### ✅ Benar — cn() Utility

```js
// src/shared/lib/utils/cn.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

#### Manfaat untuk Multi-POS

- **Theming per Tenant** — Ganti token brand, seluruh UI mengikuti
- **Dark Mode** — Satu set token, dua mode tampilan
- **Bundle Size** — Tailwind purge menghilangkan CSS tidak terpakai
- **DX** — Developer cukup pakai utility class, tidak perlu CSS file baru


---

### 4. JS Design Patterns — Addy Osmani

> **Prinsip:** *"Write scalable and maintainable JavaScript."*

#### Penerapan di InteliMart

| Pattern | Lokasi | Kegunaan |
|---------|--------|----------|
| **Factory** | `axiosClient.js` | Buat HTTP client dengan config standar |
| **Observer** | `authStore.js`, `useTheme.js` | Zustand reactive state |
| **Module** | Setiap file ES6 | Named exports, tree-shakeable |
| **Custom Hook** | `hooks/*.js` | Encapsulate reusable logic |
| **Singleton** | `axiosClient`, `queryClient` | Satu instance per app |

#### ❌ Salah

```js
// Global mutable, tight coupling
let apiUrl = 'https://api.example.com';
let token = '';
function fetchData() {
  return fetch(apiUrl + '/data', {
    headers: { Authorization: 'Bearer ' + token },
  });
}
```

#### ✅ Benar — Factory Pattern

```js
// src/shared/lib/api/axiosClient.js
import axios from 'axios';
import { env } from '@core/config/env';

export const axiosClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: env.apiTimeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
```

#### ✅ Benar — Observer + Custom Hook

```js
// src/shared/hooks/useTheme.js
const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    { name: STORAGE_KEYS.THEME }
  )
);

export function useTheme() {
  const { theme, setTheme, toggleTheme } = useThemeStore();
  // ... system preference detection & DOM sync
  return { theme, resolvedTheme, setTheme, toggleTheme };
}
```

#### ✅ Benar — React Query Hook

```js
// src/features/landing/hooks/useFeatures.js
export function useFeatures() {
  return useQuery({
    queryKey: QUERY_KEYS.FEATURES,
    queryFn: fetchFeatures,
    staleTime: 10 * 60 * 1000, // 10 menit cache
  });
}
```

#### Manfaat untuk Multi-POS

- **Separation of Concerns** — Logika API, state, UI terpisah
- **Caching** — React Query otomatis cache data outlet & produk
- **Testability** — Hook bisa di-mock untuk unit test


---

### 5. UX States — Vitaly Friedman

> **Prinsip:** *"Design all states, not just the happy path."*

#### Penerapan di InteliMart

| State | Komponen | Cara Handle |
|-------|----------|-------------|
| **Loading** | `Skeleton`, `Spinner` | Skeleton cards saat fetch |
| **Error** | `ErrorState` | Pesan error + tombol "Coba Lagi" |
| **Empty** | `EmptyState` | Ilustrasi + pesan + CTA |
| **Disabled** | `Button`, `Input` | `opacity-50 + cursor-not-allowed` |
| **Success** | Form submit | Redirect + toast |

#### ❌ Salah

```jsx
// Hanya handle happy path
function FeatureList() {
  const { data } = useFeatures();
  return data.map((f) => <FeatureCard key={f.id} {...f} />);
  // Loading? Error? Empty? 💀
}
```

#### ✅ Benar — Semua State Di-handle

```jsx
// src/features/landing/components/organisms/FeaturesSection.jsx
function FeaturesSection() {
  const { data: features, isLoading, isError, error, refetch } = useFeatures();

  return (
    <section id="features" className="section-padding">
      <SectionHeading title="Fitur Unggulan" />

      <div className="mt-16">
        {/* Loading State */}
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <ErrorState
            title="Gagal Memuat Fitur"
            message={error?.message}
            onRetry={refetch}
          />
        )}

        {/* Success State */}
        {features && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
```

#### ✅ Benar — ErrorState Component

```jsx
// src/shared/components/feedback/ErrorState.jsx
function ErrorState({ title, message, onRetry, showRetry = true }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-12 text-center"
      role="alert"
      aria-live="assertive"
    >
      <svg className="w-16 h-16 text-red-500 mb-4" aria-hidden="true">…</svg>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">{message}</p>
      {showRetry && onRetry && (
        <Button onClick={onRetry} variant="primary">Coba Lagi</Button>
      )}
    </div>
  );
}
```

#### Manfaat untuk Multi-POS

- **Trust** — Kasir tahu persis kapan data sedang dimuat vs gagal
- **Recovery** — Tombol retry menghindari refresh halaman
- **Perceived Speed** — Skeleton membuat loading terasa lebih cepat


---

### 6. Inclusive Components — Heydon Pickering

> **Prinsip:** *"Components should work for everyone, by default."*

#### Penerapan di InteliMart

- **Keyboard Navigation** — Semua elemen interaktif dapat dijangkau via Tab
- **Focus Ring** — Indikator fokus yang jelas (`.focus-ring` utility)
- **Label & Error Asosiasi** — `htmlFor`/`id` + `aria-describedby`
- **Color Contrast** — Warna brand melewati rasio WCAG AA (4.5:1)
- **Disabled Feedback** — `opacity-50` + `cursor-not-allowed`

#### ❌ Salah

```jsx
// Input tanpa label, error tanpa asosiasi
<input placeholder="Email" />
{error && <span style={{color: 'red'}}>{error}</span>}
```

#### ✅ Benar

```jsx
// src/shared/components/atoms/Input.jsx
const Input = forwardRef(
  ({ type = 'text', error = false, fullWidth, className, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      aria-invalid={error}
      className={cn(
        'px-4 py-2 rounded-lg border-2 transition-colors',
        'text-zinc-900 dark:text-zinc-100',
        'placeholder:text-zinc-400 dark:placeholder:text-zinc-500',
        'focus-ring',
        error
          ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
          : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        fullWidth && 'w-full',
        className
      )}
      {...props}
    />
  )
);
```

#### Manfaat untuk Multi-POS

- **Usability** — Kasir dengan keterbatasan fisik tetap bisa transaksi
- **Keyboard Power Users** — Input cepat tanpa mouse di POS
- **Legal** — Memenuhi standar aksesibilitas (WCAG AA)


---

### 7. WAI-ARIA — Scott O'Hara & Steve Faulkner

> **Prinsip:** *"Use semantic HTML first, ARIA only when native semantics are insufficient."*

#### Penerapan di InteliMart

| ARIA Attribute | Lokasi | Fungsi |
|---------------|--------|--------|
| `aria-labelledby` | HeroSection | Hubungkan section ke heading |
| `aria-busy` | Button | Announce loading state |
| `aria-invalid` | Input, FormField | Announce invalid field |
| `aria-describedby` | FormField | Link input ke error/helper text |
| `aria-hidden` | Icon SVG, Spinner | Sembunyikan dekorasi dari SR |
| `aria-live` | ErrorState, EmptyState | Announce perubahan konten |
| `aria-label` | Required indicator | Konteks tambahan |
| `role="alert"` | Error messages | Immediate announcement |

#### ❌ Salah

```jsx
// ARIA berlebihan atau salah
<div role="button" onClick={handleClick}>Click</div>
<div aria-live="assertive">Loading...</div> {/* terlalu agresif */}
```

#### ✅ Benar

```jsx
// src/shared/components/atoms/Button.jsx
<button
  ref={ref}
  disabled={disabled || loading}
  aria-busy={loading}
  {...props}
>
  {loading && <svg aria-hidden="true" className="animate-spin h-4 w-4">…</svg>}
  {children}
</button>
```

```jsx
// src/shared/components/feedback/ErrorState.jsx
<div
  role="alert"
  aria-live="assertive"
  className="flex flex-col items-center py-12 text-center"
>
  <svg aria-hidden="true" className="w-16 h-16 text-red-500">…</svg>
  <h3>{title}</h3>
  <p>{message}</p>
</div>
```

```jsx
// src/shared/components/feedback/EmptyState.jsx
<div role="status" aria-live="polite" className="text-center py-12">
  {icon && <div aria-hidden="true">{icon}</div>}
  <h3>{title}</h3>
  <p>{description}</p>
</div>
```

#### Manfaat untuk Multi-POS

- **Screen Reader** — Pengguna tunanetra dapat mengoperasikan POS
- **Error Announcement** — Validasi form langsung diumumkan
- **Live Regions** — Perubahan stok/harga bisa di-announce secara live


---

## 🧭 Konvensi Kode

### Naming Convention

| Element | Convention | Contoh |
|---------|-----------|--------|
| **Component** | PascalCase | `Button`, `FormField`, `HeroSection` |
| **File component** | PascalCase.jsx | `Button.jsx`, `LoginForm.jsx` |
| **File utility** | camelCase.js | `cn.js`, `format.js`, `storage.js` |
| **Function** | camelCase | `handleSubmit`, `fetchFeatures` |
| **Constant** | UPPER_SNAKE_CASE | `BUTTON_VARIANTS`, `API_BASE_URL` |
| **Hook** | use + PascalCase | `useTheme`, `useAuth`, `useFeatures` |
| **Prop** | camelCase | `variant`, `isLoading`, `onSubmit` |
| **CSS Token** | kebab-case | `--color-brand-500`, `--space-lg` |

### PropTypes + JSDoc + Zod

Setiap komponen wajib memenuhi **tiga lapisan type safety**:

```jsx
// 1. JSDoc — IntelliSense di IDE
/**
 * Button Component - Atomic Design: Atom
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'primary'|'secondary'|'outline'|'ghost'|'danger'} props.variant
 */

// 2. PropTypes — Runtime warning di development
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger']),
};

// 3. Zod — Runtime validation untuk data dari API/form
const loginSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});
```

### ESLint + Prettier

```js
// .eslintrc.cjs (ringkasan rules)
{
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',  // aksesibilitas
    'plugin:import/recommended',     // import order
    'prettier',                      // no conflict
  ],
  rules: {
    'react/prop-types': 'error',     // wajib PropTypes
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'import/order': ['warn', { 'newlines-between': 'always' }],
  },
}
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Path Aliases

```js
// vite.config.js + jsconfig.json
'@app'      → './src/app'
'@features' → './src/features'
'@shared'   → './src/shared'
'@core'     → './src/core'

// Contoh import
import { Button } from '@shared/components/atoms';
import { useAuth } from '@features/auth/hooks';
import { env } from '@core/config/env';
```


---

## 🗺️ Roadmap

| Iterasi | Status | Fitur | Target |
|---------|--------|-------|--------|
| **1** | ✅ Selesai | Landing Page + API Setup | Sep 2026 |
| **2** | ✅ Selesai | Authentication (Login, Register, Forgot/Reset Password) | Sep 2026 |
| **3** | ⏳ Berikutnya | Dashboard Multi-Outlet + Tenant Management | Okt 2026 |
| **4** | 📅 Planned | POS Core (Transaksi, Kasir, Printer) | Nov 2026 |
| **5** | 📅 Planned | Inventory Management (Stok, Transfer, Opname) | Des 2026 |
| **6** | 📅 Planned | Reports & Analytics (Dashboard, Export) | Jan 2027 |

### Iterasi 1 — Landing Page ✅

- [x] Hero section dengan CTA
- [x] Features section (API integration + React Query)
- [x] Pricing section dengan loading/error states
- [x] Responsive design (mobile, tablet, desktop)
- [x] Dark mode support (semantic tokens)
- [x] Accessibility (WCAG AA)
- [x] ESLint 0 errors

### Iterasi 2 — Authentication ✅

- [x] Login page (email + password)
- [x] Register page (nama, email, password, konfirmasi)
- [x] Forgot password page
- [x] Reset password page (token-based)
- [x] Auth store (Zustand + persist ke localStorage)
- [x] Protected routes → redirect ke `/login`
- [x] Public routes → redirect ke `/dashboard` jika sudah login
- [x] Token refresh interceptor (401 handling)
- [x] Form validation (Zod + React Hook Form)
- [x] Loading / error / success states

### Iterasi 3 — Dashboard Multi-Outlet (Berikutnya)

- [ ] Dashboard layout dengan sidebar navigation
- [ ] Multi-tenant architecture
- [ ] Outlet management (CRUD)
- [ ] User management (invite, roles)
- [ ] Profile settings
- [ ] Role-based access control (RBAC)

---

## 📄 Lisensi

MIT License — Copyright © 2026 InteliMart

Lihat file [LICENSE](LICENSE) untuk detail.

---

<p align="center">
  Dibuat dengan ❤️ untuk UMKM Indonesia
</p>

# templating_react_multiPOS
