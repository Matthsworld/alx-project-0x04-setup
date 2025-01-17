// Interface from pages/index.tsx
export interface PageRouteProps {
    pageRoute: string;
  }
  
  // Interface from components/common/Button.tsx
  export interface ButtonProps {
    action: () => void;
    buttonLabel: string;
    buttonBackgroundColor: string;
  }
  
  // Interface from components/layouts/Layout.tsx
  export interface LayoutProps {
    children: React.ReactNode;
  }
  