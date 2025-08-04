# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `bunx --bun astro dev` - Start development server (uses Astro dev server with Bun runtime)
- `bunx --bun astro build` - Build for production
- `bunx --bun astro preview` - Preview production build

### Code Quality
- `bun run check` - Run all checks (Astro, ESLint, Prettier)
- `bun run check:astro` - Run Astro type checking
- `bun run check:eslint` - Run ESLint linting
- `bun run check:prettier` - Check Prettier formatting
- `bun run fix` - Fix all auto-fixable issues (ESLint + Prettier)
- `bun run fix:eslint` - Auto-fix ESLint issues
- `bun run fix:prettier` - Auto-format with Prettier

## Architecture Overview

This is an **Astro 5.0** audiology clinic website with Hebrew RTL support, built with Tailwind CSS. The project follows a component-based architecture with clear separation of concerns.

### Key Architecture Components

**Configuration System:**
- `src/config.yaml` - Central configuration for site metadata, i18n settings, analytics, and UI theme
- Site configured for Hebrew language with RTL text direction
- Uses custom Astrowind integration (`vendor/integration/`) for config management

**Component Architecture:**
- `src/components/widgets/` - Main page sections (Hero, Features, Contact, etc.)
- `src/components/ui/` - Reusable UI components (Button, Form, Timeline, etc.) 
- `src/components/common/` - Shared utilities (Analytics, Metadata, Theme toggle, etc.)
- Components use TypeScript interfaces defined in `src/types.d.ts`

**Routing & Pages:**
- `src/pages/` - File-based routing with `.astro` and `.md` files
- `src/navigation.ts` - Centralized navigation configuration for header/footer
- Uses `getPermalink()` utility for consistent URL generation

**Layouts:**
- `src/layouts/Layout.astro` - Base layout with meta tags, analytics, and common elements
- `src/layouts/PageLayout.astro` - Standard page layout with header/footer
- `src/layouts/LandingLayout.astro` - Landing page specific layout
- `src/layouts/MarkdownLayout.astro` - For markdown content pages

**Styling & Assets:**
- Uses Tailwind CSS with RTL support and custom theme configuration
- `src/assets/styles/tailwind.css` - Base Tailwind imports
- Images optimized via Astro Assets and Unpic integration
- Icon system uses `astro-icon` with Tabler and Flat Color Icons

### Development Notes

**Content Management:**
- Site content is primarily in Hebrew
- Navigation and UI text configured in `src/navigation.ts`
- Global site settings in `src/config.yaml` including SEO metadata

**Build System:**
- Static site generation with Astro
- Includes sitemap generation, compression, and image optimization
- Supports external script loading via Partytown when needed

**Deployment Ready:**
- Configured for Vercel, Netlify, or other static hosting
- Includes Docker setup and Nginx configuration
- SEO optimized with Open Graph tags and structured metadata