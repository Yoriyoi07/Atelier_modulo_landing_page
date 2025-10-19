/// <reference types="vite/client" />

// Support custom figma:asset module specifiers mapped via Vite alias
declare module "figma:asset/*" {
  const src: string;
  export default src;
}

// Allow version-suffixed aliases like "lucide-react@0.487.0" mapped in vite.config.ts
declare module "lucide-react@*" {
  export * from "lucide-react";
  const _default: any;
  export default _default;
}

declare module "@radix-ui/react-accordion@*" { export * from "@radix-ui/react-accordion"; }
declare module "@radix-ui/react-alert-dialog@*" { export * from "@radix-ui/react-alert-dialog"; }
declare module "@radix-ui/react-aspect-ratio@*" { export * from "@radix-ui/react-aspect-ratio"; }
declare module "@radix-ui/react-avatar@*" { export * from "@radix-ui/react-avatar"; }
declare module "@radix-ui/react-checkbox@*" { export * from "@radix-ui/react-checkbox"; }
declare module "@radix-ui/react-collapsible@*" { export * from "@radix-ui/react-collapsible"; }
declare module "@radix-ui/react-context-menu@*" { export * from "@radix-ui/react-context-menu"; }
declare module "@radix-ui/react-dialog@*" { export * from "@radix-ui/react-dialog"; }
declare module "@radix-ui/react-dropdown-menu@*" { export * from "@radix-ui/react-dropdown-menu"; }
declare module "@radix-ui/react-hover-card@*" { export * from "@radix-ui/react-hover-card"; }
declare module "@radix-ui/react-label@*" { export * from "@radix-ui/react-label"; }
declare module "@radix-ui/react-menubar@*" { export * from "@radix-ui/react-menubar"; }
declare module "@radix-ui/react-navigation-menu@*" { export * from "@radix-ui/react-navigation-menu"; }
declare module "@radix-ui/react-popover@*" { export * from "@radix-ui/react-popover"; }
declare module "@radix-ui/react-progress@*" { export * from "@radix-ui/react-progress"; }
declare module "@radix-ui/react-radio-group@*" { export * from "@radix-ui/react-radio-group"; }
declare module "@radix-ui/react-scroll-area@*" { export * from "@radix-ui/react-scroll-area"; }
declare module "@radix-ui/react-select@*" { export * from "@radix-ui/react-select"; }
declare module "@radix-ui/react-separator@*" { export * from "@radix-ui/react-separator"; }
declare module "@radix-ui/react-slider@*" { export * from "@radix-ui/react-slider"; }
declare module "@radix-ui/react-slot@*" { export * from "@radix-ui/react-slot"; }
declare module "@radix-ui/react-switch@*" { export * from "@radix-ui/react-switch"; }
declare module "@radix-ui/react-tabs@*" { export * from "@radix-ui/react-tabs"; }
declare module "@radix-ui/react-toggle@*" { export * from "@radix-ui/react-toggle"; }
declare module "@radix-ui/react-toggle-group@*" { export * from "@radix-ui/react-toggle-group"; }

declare module "class-variance-authority@*" { export * from "class-variance-authority"; }

declare module "react-day-picker@*" { export * from "react-day-picker"; }

declare module "embla-carousel-react@*" {
  import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
  export default useEmblaCarousel;
  export type { UseEmblaCarouselType };
}

declare module "cmdk@*" { export * from "cmdk"; }

declare module "recharts@*" { export * from "recharts"; }

declare module "react-resizable-panels@*" { export * from "react-resizable-panels"; }
declare module "react-hook-form@*" { export * from "react-hook-form"; }

declare module "input-otp@*" { export * from "input-otp"; }

declare module "vaul@*" { export * from "vaul"; }

declare module "sonner@*" {
  export * from "sonner";
  const _default: any;
  export default _default;
}

declare module "next-themes@*" { export * from "next-themes"; }
declare module "@radix-ui/react-tooltip@*" { export * from "@radix-ui/react-tooltip"; }
