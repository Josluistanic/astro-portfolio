import type { ProjectTagKey } from "@/utils/projectTags";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: ProjectTagKey[];
  link?: string;
  github?: string;
  blogPost?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "XAdES Tools",
    description:
      "Una web con herramientas para probar el uso de XAdES-BES en una aplicación web. Contiene herramientas para extraer los números aleatorios de un comprobante firmado, firmar un comprobante (si se desea con los números aleatorios para debug), enviar a validación en el entorno de pruebas del SRI y consultar a autorización en el entorno de pruebas del SRI.",
    image: "/img/projects/xadestools.webp",
    tags: ["TAILWIND", "ALPINEJS", "LARAVEL", "LIVEWIRE"],
  },
  {
    title: "Nunu",
    description:
      "Web con WinterCMS y Bootstrap, creada para presentar información de instituciones públicas. Se utilizó un enfoque monorepo con ramas para cada una de las versiones personalizadas de cada institución.",
    link: "https://gadsalinasimbabura.gob.ec",
    image: "/img/projects/gadlaunionq.webp",
    tags: ["WINTERCMS", "BOOTSTRAP", "JQUERY"],
  },
  {
    title: "Facturador HS",
    description:
      "Plataforma de facturación web con más de 80 clientes de instituciones públicas y empresas privadas. Capacidad de emitir, firmar y visualizar: facturas, comprobantes de retención ATS y liquidaciones de compra. Programado bajo la ficha técnica y reglamentación del SRI. Incluye generación de reportes y la capacidad de imprimir facturas en impresoras térmicas. Incluye un apartado para la generación del Anexo Transaccional Simplificado (ATS) y funciona con uno o varios usuarios para la misma institución.",
    image: "/img/projects/facturadorhardsoft.webp",
    tags: ["LARAVEL", "LIVEWIRE", "ALPINEJS", "TAILWIND"],
  },
  {
    title: "Yachana",
    description:
      "Yachana es un paquete de composer que permite crear documentos XML de diferentes tipos en base a lo establecido en la ficha técnica del SRI. El proyecto se encuentra en desarrollo",
    image: "/img/projects/yachana.webp",
    tags: ["PHP"],
  },
];
