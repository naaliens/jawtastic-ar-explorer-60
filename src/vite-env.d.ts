/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src: string;
      ar?: boolean;
      'ar-modes'?: string;
      'camera-controls'?: boolean;
      poster?: string;
      'shadow-intensity'?: string;
      'auto-rotate'?: boolean;
      'camera-orbit'?: string;
      onLoad?: () => void;
      slot?: string;
    }, HTMLElement>;
  }
}