import KeyInputProvider from '~/providers/key-input'
import React, { Component, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default class Layout extends Component<Props> {
  render(): JSX.Element {
    return <KeyInputProvider>{this.props.children}</KeyInputProvider>
  }
}
