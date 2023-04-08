import { Children, useEffect, useState } from 'react'

import { Route } from 'src/CustomTypes/Types/Route'

const useRouting = (routerChildren: React.ReactElement): [Route, (path: string) => void] => {
  const children = Children.toArray(routerChildren)
  const firstRoute: Route = children.length !== 0 ? (children[0] as Route) : null
  const [toRender, setToRender] = useState<Route>(firstRoute)

  const navigateTo = (path: string): void => {
    children.map((child) => {
      if ((child as Route)?.props?.to === path) {
        setToRender(child as Route)
      }
    })
  }

  return [toRender, navigateTo]
}
export default useRouting
