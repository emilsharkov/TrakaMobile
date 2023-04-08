import { createContext } from 'react'
import useRouting from 'src/Hooks/useRouting'
import { RouterCtxt } from 'src/CustomTypes/Classes/Router'

export const RouterContext = createContext<RouterCtxt>(new RouterCtxt())

const Router = ({ children }): JSX.Element => {
  const [route, navigateTo] = useRouting(children)

  return (
    <RouterContext.Provider value={{ navigateTo }}>
      <>{route}</>
    </RouterContext.Provider>
  )
}

export default Router