# Flare UI

Сучасна React UI бібліотека компонентів.

## Структура проекту

```
flare-ui/
├── packages/
│   ├── core/          # UI компоненти для npm
│   └── docs/          # Storybook документація
└── README.md
```

## Розробка

```bash
# Встановити залежності
pnpm install

# Збірка всіх пакетів
pnpm build

# Розробка
pnpm dev

# Запуск Storybook
cd packages/docs
pnpm storybook
```

## Пакети

### @flare/ui

Основна бібліотека компонентів:

- TypeScript підтримка
- Tailwind CSS стилізація
- Tree-shaking підтримка
- ESM + CJS bundle

### @flare/docs

Storybook документація та прев'ю компонентів.
