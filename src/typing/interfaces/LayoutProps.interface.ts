import { PathRouteProps } from "react-router-dom";

export interface LayoutProps {
  routes: Record<string, PathRouteProps & { path: string; link?: string }>;
}
