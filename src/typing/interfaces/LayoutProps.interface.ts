import { PathRouteProps } from "react-router-dom";

export interface LayoutProps {
  routes: Record<string, PathRouteProps & { link?: string }>;
}
