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
      "Desarrolladora Frontend con Astro, React, Nextjs, Typescript y Tailwindcss. Desarrolladora de Páginas Web en Wordpress.",
  },
  {
    period: "ene-2024 a sep-2024",
    title: "Administradora de Campus Virtual y Desarroladora Frontend",
    company: "Instituto Universitario Patagónico de las Artes (IUPA)",
    description:
      "Administradora del Campus Virtual Universitario (Plataforma Moodle). Desarrolladora Frontend de nuevos componentes y actualizaciones de Plataforma de Gestión Académica de Escuela de Arte Provincial, asociada a la universidad.",
  },
  {
    period: "oct-2020 a dic-2023",
    title: "Desarrolladora Frontend",
    company: "IUPA",
    description:
      "Desarroladora Frontend de la Plataforma de Gestión Académica de Escuela de Arte Provincial, asociada a la universidad con lenguaje C#. Desarrollo de páginas web de Soporte a los Usuarios y de la Biblioteca de la Universidad, entre otras.",
  },
  {
    period: "mar-2018 a dic-2020",
    title: "Técnica en Administración de Sistemas",
    company: "IUPA",
    description:
      "Soporte a usuarios en la utilización de Plataforma de Gestión Académica de Universitaria (SIU), así como soporte en la utilización de otras plataformas academicas, recursos de ofimática y hardware.",
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
    name: "Tienda Virtual",
    descripcion:
      "Tienda virtual demonstrativa con login, carrito de compras y passarela de pagos con Nextjs, Tpescript, Sanity y Stripe",
    tecnologias: ["Nextjs", "Typescript", "Sanity", "Stripe"],
    textoBoton: "Video",
    enlace: "#",
    tieneIcono: true,
  },
  {
    nombre: "Ruca Services",
    descripcion:
      "Pagina web creada para el cliente Ruca Services creada con Astro, React, Typescript, Tailwind CSS",
    tecnologias: ["Astro", "React", "Typescript", "Tailwind CSS"],
    textoBoton: "Enlace",
    enlace: "https://rucaservices.com.ar/",
    tieneIcono: true,
  },
  {
    nombre: "Página Web de Azanza",
    descripcion:
      "Página web creada en Wordpress de administración de barrios y condominios para el cliente Administraciones Azanza",
    tecnologias: ["Wordpress"],
    textoBoton: "Enlace",
    enlace: "https://azanza.com.ar/",
  },
];
