# My Eventos App

Aplicación web para eventos MICE (Meetings, Incentives, Conferences, Exhibitions) en Posadas, Misiones.

## Estructura de Rutas

La aplicación ahora utiliza el prefijo `/mice` para todas las rutas:

- `/mice` - Página de inicio
- `/mice/seccion1` - ¿Nos Reunimos en Posadas?
- `/mice/seccion2` - Parque del Conocimiento y Centro de Convenciones
- `/mice/seccion3` - Agenda MICE y Eventos Deportivos
- `/mice/seccion4` - Catálogo de Locaciones para eventos
- `/mice/seccion5` - Posadas Deportiva
- `/mice/seccion6` - Posadas Sustentable
- `/mice/seccion7` - Posadas Universitaria
- `/mice/seccion8` - Posadas Congresos y Convenciones Bureau
- `/mice/seccion9` - Conectividad
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
