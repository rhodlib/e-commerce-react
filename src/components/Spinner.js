import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const Spinner = () => (
  <div>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
  </div>
)

export default Spinner;