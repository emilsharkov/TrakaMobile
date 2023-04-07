import { RouteProps } from 'src/Interfaces/Route'

const Route = (props: RouteProps): JSX.Element => {
  return <>{props.component}</>
}

export default Route
