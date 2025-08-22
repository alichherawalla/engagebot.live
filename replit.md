# EngageBot Landing Page

## Overview

EngageBot is an AI-powered Twitter engagement automation platform designed for tech entrepreneurs, startup founders, and digital marketers. The application helps users scale their Twitter presence by automating authentic engagement through AI-generated responses that maintain brand voice consistency. The platform uses Claude 4.0 to discover relevant conversations, generate contextual responses based on user expertise, and build meaningful professional relationships at scale.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Animation**: Framer Motion for smooth page transitions and component animations
- **UI Components**: Comprehensive component library based on Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with structured error handling and logging middleware
- **Development**: Custom Vite integration for hot module replacement and development server

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for migrations and schema definitions
- **In-Memory Storage**: Fallback MemStorage implementation for development/testing

### Frontend Component Structure
- **Layout Components**: Navbar, Footer, and page-level components
- **Landing Page Sections**: Modular components for Hero, Problem, Solution, Features, Pricing, FAQ, and Social Proof
- **Blog System**: Dedicated blog pages with SEO optimization and content management
- **UI System**: Comprehensive design system with consistent styling and responsive design

### Content Management
- **Blog Posts**: Full CRUD operations for blog content with metadata support
- **SEO**: Dynamic meta tag management and structured data optimization
- **Content Types**: Support for rich text content, categories, and publication status

### Development Workflow
- **Build Process**: Separate client and server builds with optimized production bundling
- **Type Safety**: Shared TypeScript schemas between frontend and backend
- **Code Organization**: Clear separation between client, server, and shared code with path aliases

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18+ with TanStack Query for data fetching and state management
- **Build Tools**: Vite for development and production builds with TypeScript support
- **Styling**: Tailwind CSS with PostCSS for styling and shadcn/ui for component library

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL driver and Neon Database serverless connection
- **Validation**: Zod for runtime type validation and schema parsing
- **Development**: tsx for TypeScript execution and esbuild for production bundling

### UI and Animation Libraries
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Animation**: Framer Motion for page transitions and micro-interactions
- **Icons**: Lucide React for consistent iconography
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation

### Development and Deployment
- **Replit Integration**: Custom Replit plugins for development environment and error handling
- **TypeScript**: Comprehensive type checking with shared schemas
- **Package Management**: npm with lockfile for dependency management

### External Services Integration
- **Database Hosting**: Neon Database for managed PostgreSQL hosting
- **Font Loading**: Google Fonts (Inter) for typography
- **Development Banner**: Replit development environment integration