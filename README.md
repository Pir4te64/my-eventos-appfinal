# My Eventos App

Aplicación web para eventos MICE (Meetings, Incentives, Conferences, Exhibitions) en Posadas, Misiones.

## Estructura de Rutas

La aplicación ahora utiliza el prefijo `/mice` para todas las rutas con URLs descriptivas:

- `/mice` - Página de inicio
- `/mice/nos-reunimos-posadas` - ¿Nos Reunimos en Posadas?
- `/mice/parque-conocimiento` - Parque del Conocimiento y Centro de Convenciones
- `/mice/agenda-mice-deportivos` - Agenda MICE y Eventos Deportivos
- `/mice/catalogo-locaciones` - Catálogo de Locaciones para eventos
- `/mice/posadas-deportiva` - Posadas Deportiva
- `/mice/posadas-sustentable` - Posadas Sustentable
- `/mice/posadas-universitaria` - Posadas Universitaria
- `/mice/bureau-convenciones` - Posadas Congresos y Convenciones Bureau
- `/mice/conectividad` - Conectividad
- `/mice/contacto` - Página de contacto
- `/mice/eventos/:id` - Páginas de eventos individuales

## Características

- Diseño responsive con Tailwind CSS
- Navegación con React Router
- Componentes modulares
- Optimizado para SEO
- Botón flotante de WhatsApp
- Carousel de imágenes con Swiper

## Tecnologías

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Headless UI
- React Icons
- Swiper

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Construcción

```bash
npm run build
```

## Despliegue

La aplicación está configurada para desplegarse en Vercel con soporte para rutas de React Router.
