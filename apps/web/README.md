# Web Application (Astro)

Frontend aplikacji Pole Widzenia zbudowany w Astro.

## � Struktura projektu

```text
/
├── public/          # Statyczne pliki
├── src/
│   ├── api/
│   │   └── payload/  # Klient Payload CMS i serwisy
│   ├── components/   # Komponenty Astro
│   ├── layouts/      # Layouty stron
│   ├── pages/        # Routing (pliki .astro)
│   └── utils/        # Funkcje pomocnicze
└── package.json
```

## 🖼️ Obsługa obrazków z CMS

Aplikacja pobiera obrazki z Payload CMS (port 3000). Dostępne są dwa podejścia:

### Metoda 1: Direct URL (obecna implementacja)

Obrazki są pobierane bezpośrednio z CMS URL:

```astro
---
import { getImageData } from '../utils/image';

const imageData = getImageData(media);
---

<style define:vars={{ bgImg: imageData?.url ? `url(${imageData.url})` : 'none' }}>
  .element {
    background-image: var(--bgImg);
  }
</style>
```

### Metoda 2: Zoptymalizowane obrazki (zalecane dla produkcji)

Użyj komponentu `OptimizedImage` dla automatycznej optymalizacji:

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<OptimizedImage
  media={homepage?.featureBackgroundImage}
  alt="Background"
  width={1920}
  height={1080}
  format="webp"
/>
```

### Metoda 3: API Proxy

Dostępny jest endpoint proxy do obrazków:
- URL: `/api/media/[...path]`
- Cache: 1 rok (immutable)
- Automatyczne przekazywanie content-type

## ⚙️ Konfiguracja

Zmienne środowiskowe są centralizowane w `packages/payload-config/.env`:

```bash
# Database configuration
DATABASE_URI=file:../../apps/cms/cms.db

# Payload CMS secret key
PAYLOAD_SECRET=your-secret-key-here

# CMS API URL for web app
CMS_URL=http://localhost:3000
```

Aplikacja Astro automatycznie czyta te zmienne przez monorepo (Turborepo).
Do tworzenia nowych zmiennych środowiskowych dodaj ich typy w `src/env.d.ts`.

## 🧞 Komendy

| Komenda            | Akcja                                         |
| :----------------- | :-------------------------------------------- |
| `pnpm install`     | Instaluje zależności                          |
| `pnpm dev`         | Uruchamia serwer deweloperski na `localhost:4321` |
| `pnpm build`       | Buduje aplikację produkcyjną do `./dist/`     |
| `pnpm preview`     | Podgląd buildu lokalnie przed deployment      |

## 🔗 Integracja z CMS

Aplikacja używa Payload CMS jako headless CMS. Połączenie jest konfigurowane w:
- `src/api/payload/client.ts` - klient Payload
- `src/api/payload/services/` - serwisy do pobierania danych

## � Więcej informacji

- [Dokumentacja Astro](https://docs.astro.build)
- [Dokumentacja Payload CMS](https://payloadcms.com/docs)
