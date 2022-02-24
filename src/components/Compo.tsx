//component prop

import About from './About'
import {DemoProps} from './Demo'

type CompoProps = {
  isCompo: boolean
  Component: React.ComponentType<DemoProps>
}

function Compo({ isCompo, Component }: CompoProps) {
  return (
    <div>
      {
        isCompo ? <Component name={"MSD"} /> : <About />
      }
    </div>
  )
}

export default Compo