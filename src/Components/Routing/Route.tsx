import { RouteProps } from 'src/CustomTypes/Interfaces/Route'

const Route = (props: RouteProps): JSX.Element => {
  return <>{props.component}</>
}

export default Route
