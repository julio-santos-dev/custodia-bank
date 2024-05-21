import { InferableComponentEnhancerWithProps } from 'react-redux'

export type ConnectedProps<T> = T extends InferableComponentEnhancerWithProps<
  infer Props,
  infer _
>
  ? Props
  : never

export interface ReducerAction<T> {
  payload: Partial<T>
  type: string
}
