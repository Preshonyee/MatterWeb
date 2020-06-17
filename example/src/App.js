import React from 'react'
import { PrimaryButton, PrimaryButtonWithIcon } from 'matter-web'
import { ExampleComponent } from 'matter-web'
import { UIButton } from 'matter-web'
import 'matter-web/dist/index.css'

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <UIButton text='Are you serious?' />
      <PrimaryButton text='Primary Button' />
      <PrimaryButtonWithIcon text='Icon Button' />
      <ExampleComponent />
    </div>
  )
}

export default App
