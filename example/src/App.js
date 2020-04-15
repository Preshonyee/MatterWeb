import React from 'react'
import { PrimaryButton, PrimaryButtonWithIcon } from 'matter-web'
import { ExampleComponent } from 'matter-web'
import 'matter-web/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text='Create React Library Example 😄' />
      <PrimaryButton text='Now working' />
      <PrimaryButtonWithIcon text='Icon button' />
    </div>
  )
}

export default App
