import { Children, createContext, ReactElement } from 'react'

import useRouting from 'src/Hooks/useRouting'

const Router = ({ children }): ReactElement => {
  const [component, navigateTo] = useRouting(children)

  return { component }
}

export default Router
