export interface RouteProps {
  to: string
  component: JSX.Element
  navigateTo?: (pathName: string) => void
}
