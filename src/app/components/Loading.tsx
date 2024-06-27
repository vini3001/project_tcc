import { ReactNode } from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export type LoadingProps = {
  isLoading: boolean
  color?: string
  children?: ReactNode
}

type LoadingComponentProps = {
  color: string
}

function LoadingComponent({color}: LoadingComponentProps) {
  return (
    <div style={{ margin: '25vh 0', width: 'full'}}>
      <ThreeCircles
        height="120"
        width="120"
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor={color}
        innerCircleColor={color}
        middleCircleColor={color}
      />
    </div>
  )
}

function LoadingComponentButton({color}: LoadingComponentProps) {
  return (
    <div>
      <ThreeCircles
        height="30"
        width="100"
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor={color}
        innerCircleColor={color}
        middleCircleColor={color}
      />
    </div>
  )
}

export function Loading({ children, color, isLoading }: LoadingProps) {
  return <>{isLoading ? <LoadingComponent color={color ? color : '#3D45EE'} /> : children}</>
}

export function LoadingButton({ children, color, isLoading }: LoadingProps) {
  return <>{isLoading ? <LoadingComponentButton color={color ? color : 'white'} /> : children}</>
}