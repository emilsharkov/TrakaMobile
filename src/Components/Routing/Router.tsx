import { createContext } from 'react'

import useRouting from 'src/Hooks/useRouting'
import { RouterContext } from 'src/Types/RouterContext'

const Router = ({ children }): JSX.Element => {
  const [route, navigateTo] = useRouting(children)
  const RouterContext = createContext<RouterContext | null>(null)

  return (
    <RouterContext.Provider value={{ navigateTo }}>
      <>{route}</>
    </RouterContext.Provider>
  )
}

export default Router
