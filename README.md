# Pro Riski Test Case

Торговый дашборд для отслеживания сделок и статистики. Построен на Next.js 16 с TypeScript, MobX и Material-UI.

## Технологии

- **Next.js 16** — App Router, SSR, ISR
- **React 19** — с Server Components
- **TypeScript** — строгая типизация
- **MobX** — стейт-менеджмент
- **Material-UI v7** — компоненты и темизация
- **next-intl** — интернационализация (ru/en)
- **SCSS** — стили с модулями

## Быстрый старт

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000). По умолчанию откроется русская версия, английская доступна по `/en`.

## Структура проекта

Проект следует Feature-Sliced Design:

```
app/                    # Роутинг и страницы (Next.js App Router)
  [locale]/            # Локализованные страницы
    page.tsx           # Главная страница со статистикой
    layout.tsx         # Лейаут с провайдерами

shared/                # Переиспользуемый код
  ui/                  # UI компоненты (Button, Table, Card и т.д.)
  hooks/               # Кастомные хуки (useDateRange, useTradeFilters)
  stores/              # MobX сторы (TradesStore)
  types/               # TypeScript типы
  lib/                 # Утилиты (formatters, routes)
  config/              # Конфигурации (фильтры, таблицы)

widgets/               # Составные компоненты
  Header/              # Шапка с навигацией
  Statistics/          # Блок статистики
  Filters/             # Фильтры сделок
  TradesTableWrapper/  # Обертка таблицы с пагинацией

messages/              # Переводы (ru/en)
theme/                 # MUI тема
```

## Основные фичи

### Статистика сделок
- Карточки с метриками (рейтинг, прибыль, количество сделок)
- Фильтрация по датам (сегодня, неделя, месяц, все время)
- Фильтры по инструментам, направлениям, стратегиям

### Таблица сделок
- Пагинация
- Сортировка и фильтрация
- Адаптивная верстка с горизонтальным скроллом на мобильных

### Интернационализация
- Русский и английский языки
- Переключение через меню или мобильный drawer
- SEO-оптимизированные мета-теги для каждого языка

## Архитектура

### Стейт-менеджмент

Используется MobX с единым `RootStore`:

```typescript
const { tradesStore } = useStore();
tradesStore.fetchTrades();
tradesStore.setPage(2);
```

`TradesStore` управляет:
- Списком сделок
- Фильтрами (даты, инструменты, стратегии)
- Пагинацией
- Состоянием загрузки

### Компоненты

Все компоненты типизированы через `React.FC<IComponentProps>`. Пропсы вынесены в `types.ts`:

```typescript
// shared/ui/Button/types.ts
export interface IButtonProps {
  label: string;
  onClick: () => void;
}

// shared/ui/Button/Button.tsx
export const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  // ...
};
```

### Хуки

Бизнес-логика вынесена в кастомные хуки:

- `useDateRange` — работа с диапазонами дат
- `useTradeFilters` — логика фильтров
- `useTradesTable` — форматирование данных таблицы
- `useMenu` — управление меню/дропдаунами

### Оптимизация

- **Мемоизация**: `useMemo`, `useCallback` для тяжелых вычислений
- **React.memo**: для компонентов таблицы
- **ISR**: главная страница кэшируется на 15 минут (`revalidate: 900`)
- **SSR**: метаданные генерируются на сервере для SEO

## Стили

SCSS модули с миксинами для адаптивности:

```scss
@include mobile {
  // стили для мобильных
}

@include tablet {
  // стили для планшетов
}
```

Брейкпоинты:
- Mobile: до 768px
- Tablet: 768px - 1024px
- Desktop: от 1024px

## Разработка

### Добавление нового компонента

1. Создай папку в `shared/ui/` или `widgets/`
2. Создай файлы: `ComponentName.tsx`, `ComponentName.module.scss`, `types.ts`, `index.ts`
3. Экспортируй через `index.ts`

### Добавление перевода

Добавь ключи в `messages/ru/` и `messages/en/`:

```json
{
  "newKey": "Новое значение"
}
```

Используй в компоненте:

```typescript
const t = useTranslations('namespace');
t('newKey');
```

### Работа со стором

Добавь новый стор в `shared/stores/`:

```typescript
export class NewStore {
  @observable data = [];
  
  @action
  fetchData() {
    // логика
  }
}
```

Зарегистрируй в `RootStore.ts`.

## Сборка

```bash
npm run build
npm start
```

Проект собирается в статику с ISR для главной страницы.

## Деплой на Vercel

### Через Vercel CLI

```bash
npm i -g vercel
vercel
```

### Через GitHub

1. Закоммить и запушить код в репозиторий
2. Зайти на [vercel.com](https://vercel.com)
3. Импортировать проект из GitHub
4. Vercel автоматически определит Next.js и настроит деплой

После деплоя проект будет доступен по адресу `https://your-project.vercel.app`

## Что можно улучшить

- [ ] Допилить туду
- [ ] Полностью избавиться от инлайн
- [ ] Избавиться от MUI на свой ui кит
- [ ] Добавить тесты (Jest + React Testing Library)
- [ ] Настроить CI/CD
- [ ] Добавить Storybook для компонентов
- [ ] Реализовать реальный API вместо моков
- [ ] Добавить E2E тесты (Playwright)
- [ ] Настроить мониторинг ошибок (Sentry)

## Лицензия

Private
