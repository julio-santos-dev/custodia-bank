import { connect } from '@packages/sdk'
import * as gameActions from '@packages/sdk/resources/game/actions'
import * as gameSelectors from '@packages/sdk/resources/game/selectors'
import React, { PureComponent } from 'react'

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    children: any
  }

const mapStateToProps = (state) => ({ status: gameSelectors.status(state) })

const mapDispatchToProps = (dispatch) => ({
  makeGuess: (char: string) => null,
})

const connector = connect(mapStateToProps, mapDispatchToProps)

class KeyInputProvider extends PureComponent<Props> {
  componentDidMount(): void {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown = ({ key }: KeyboardEvent): void => {
    if (this.props.status == 'playing') {
      this.props.makeGuess(key)
    }
  }

  render(): JSX.Element {
    return <>{this.props.children}</>
  }
}

export default connector(KeyInputProvider)
