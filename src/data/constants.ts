// src/data/constants.ts
import type { ImageMetadata } from "astro"; // Importa el tipo para metadatos de imagen

// Importa las imágenes para que Astro pueda procesarlas
import javascriptIcon from "../assets/tools/javascript.png";
import astroIcon from "../assets/tools/astro.png";
import cssIcon from "../assets/tools/css.png";
import csharpIcon from "../assets/tools/csharp.png";
import mongodbIcon from "../assets/tools/mongodb.png";
import nextjsIcon from "../assets/tools/nextjs.jpg"; // Asegúrate que la extensión .jpg sea correcta
import postgresqlIcon from "../assets/tools/postgresql.png";
import reactjsIcon from "../assets/tools/reactjs.png";
import sqlServerIcon from "../assets/tools/sqlServer.png";
import tailwindIcon from "../assets/tools/tailwind.png";
import typescriptIcon from "../assets/tools/typescript.png";
import wordpressIcon from "../assets/tools/wordpress.png";

// Define una interfaz para describir la estructura de cada herramienta
export interface Tool {
  id: number;
  icon: ImageMetadata; // El tipo correcto para usar con <Image>
  name: string; // Añadido para posible uso (ej. tooltip o texto debajo del icono)
  description: string; // Descripción para el atributo 'alt'
}

//Experiencias
export const experiences = [
  {
    period: "Actualmente",
    title: "Desarrolladora Frontend",
    company: "Freelancer",
    description:
      "Desarrolladora de páginas web con Wordpress y Astro, y de plataformas con  React, Nextjs, Typescript, Tailwindcss y Postgresql.",
  },
  {
    period: "feb/24 a sep/24",
    title: "Desarroladora Frontend",
    company: "Instituto Universitario Patagónico de las Artes (IUPA)",
    description:
      "Administradora del Campus Virtual Universitario (Plataforma Moodle). Desarrolladora Frontend de nuevos componentes y actualizaciones de Plataforma de Gestión Académica de Escuela de Arte Provincial, asociada a la universidad.",
  },
  {
    period: "nov/20 a feb/24",
    title: "Desarrolladora Frontend",
    company: "IUPA",
    description:
      "Desarroladora Frontend de la Plataforma de Gestión Académica de Escuela de Arte Provincial, asociada a la universidad con lenguaje C#. Desarrollo de páginas web de Soporte a los Usuarios y de la Biblioteca de la Universidad, entre otras.",
  },
  {
    period: "mar/18 a nov/20",
    title: "Técnica en Adm. Sistemas",
    company: "IUPA",
    description:
      "Soporte a usuarios en la utilización de Plataforma de Gestión Académica de Universitaria (SIU), así como soporte en la utilización de otras plataformas académicas, recursos de ofimática y hardware.",
  },
];

//Habilidades
export const tools = [
  {
    id: 1,
    icon: javascriptIcon,
    name: "JavaScript",
    description: "Icono de Javascript",
  },
  {
    id: 2,
    icon: typescriptIcon,
    name: "TypeScript",
    description: "Icono de Typescript",
  },
  { id: 3, icon: cssIcon, name: "CSS", description: "Icono de CSS" },
  {
    id: 4,
    icon: tailwindIcon,
    name: "Tailwind CSS",
    description: "Icono de Tailwind CSS",
  },
  { id: 5, icon: astroIcon, name: "Astro", description: "Icono de Astro" },
  {
    id: 6,
    icon: reactjsIcon,
    name: "ReactJS",
    description: "Icono de ReactJS",
  },
  { id: 7, icon: nextjsIcon, name: "Next.js", description: "Icono de Next.js" },
  { id: 8, icon: csharpIcon, name: "C#", description: "Icono de C#" },
  {
    id: 9,
    icon: postgresqlIcon,
    name: "PostgreSQL",
    description: "Icono de PostgreSQL",
  },
  {
    id: 10,
    icon: sqlServerIcon,
    name: "SQL Server",
    description: "Icono de SQL Server",
  },
  {
    id: 11,
    icon: mongodbIcon,
    name: "MongoDB",
    description: "Icono de MongoDB",
  },
  {
    id: 12,
    icon: wordpressIcon,
    name: "WordPress",
    description: "Icono de Wordpress",
  },
];

//Idiomas
export const languages = [
  { code: "Pt", name: "Portugués", level: "Nativo" },
  { code: "Es", name: "Español", level: "Avanzado" },
  { code: "In", name: "Inglés", level: "Intermedio" },
];

//Proyectos
export const projects = [
  {
    title: "La Serendipia",
    description:
      "Página web con la tienda virtual del cliente La Serendipia, creada con Wordpress y Woocommerce.",
    link: "https://laserendipia.com.ar", // enlace al video
    icon: "/icons/enlace.png",
    iconDescription: "pagina web",
    image: "/projects/serendipia.webp",
    secondUrl: "https://laserendipia.com.ar",
  },
  {
    title: "Ruca Services",
    description:
      "Página web del cliente Ruca Services, creada con Astro, Typescript, Tailwind CSS y integrada con WhatsApp.",
    link: "https://rucaservices.com.ar/",
    icon: "/icons/enlace.png", // icono de Astro
    iconDescription: "página web",
    image: "/projects/rucaservices.webp",
    secondUrl: "https://rucaservices.com.ar/",
  },
  {
    title: "Azanza Administraciones",
    description:
      "Página web creada en Wordpress de admin. de edificios y barrios para el cliente Azanza Administraciones.",
    link: "https://azanza.com.ar",
    icon: "/icons/enlace.png",
    image: "/projects/azanza.webp",
    iconDescription: "página web de azanza",
    secondUrl: "https://azanza.com.ar",
  },
  {
    title: "Tienda Virtual",
    description:
      "Tienda virtual demonstrativa con login, carrito de compras y pasarela de pagos con Nextjs, Typescript, Sanity y Stripe.",
    link: "https://youtu.be/wXUnz03lKg4", // enlace al video

    icon: "/icons/white-github.png", // para el repo de Github
    iconDescription: "github",
    image: "/projects/mitienda.webp",
    secondUrl: "https://github.com/lucianesd/mi-tienda-app",
  },
];
