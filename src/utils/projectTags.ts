export type ProjectTagKey =
  | "LARAVEL"
  | "WINTERCMS"
  | "TAILWIND"
  | "BOOTSTRAP"
  | "PHP"
  | "JAVASCRIPT"
  | "JOOMLA"
  | "WORDPRESS"
  | "LIVEWIRE"
  | "ALPINEJS"
  | "JQUERY";

export interface ProjectTagMeta {
  name: string;
  class: string;
}

export const PROJECT_TAGS: Record<ProjectTagKey, ProjectTagMeta> = {
  LARAVEL: {
    name: "Laravel",
    class: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  },
  WINTERCMS: {
    name: "WinterCMS",
    class: "bg-sky-200 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  },
  TAILWIND: {
    name: "TailwindCSS",
    class: "bg-cyan-200 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class:
      "bg-violet-300 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  },
  PHP: {
    name: "PHP",
    class: "bg-slate-400 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
  JOOMLA: {
    name: "Joomla",
    class: "bg-sky-200 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  },
  WORDPRESS: {
    name: "Wordpress",
    class: "bg-sky-200 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  },
  LIVEWIRE: {
    name: "Livewire",
    class: "bg-pink-200 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  },
  ALPINEJS: {
    name: "AlpineJS",
    class: "bg-sky-200 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  },
  JQUERY: {
    name: "JQuery",
    class: "bg-sky-300 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  },
};
