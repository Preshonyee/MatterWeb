import * as React from 'react'
import styles from './styles.module.css'
import { PrimaryButton, PrimaryButtonWithIcon } from './buttons'
import UIButton from './components/UI/Button'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { PrimaryButton, PrimaryButtonWithIcon, UIButton }
