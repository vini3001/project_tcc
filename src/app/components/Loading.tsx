import { ReactNode } from 'react'
import { ThreeCircles } from 'react-loader-spinner'

export type LoadingProps = {
  isLoading: boolean
  children?: ReactNode
}
export function LoadingComponent() {
  return (
    <div style={{ margin: '25vh 0', width: 'full'}}>
      <ThreeCircles
        height="120"
        width="120"
        color="#3D45EE"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#3D45EE"
        innerCircleColor="#3D45EE"
        middleCircleColor="#3D45EE"
      />
    </div>
  )
}
export function Loading({ children, isLoading }: LoadingProps) {
  return <>{isLoading ? <LoadingComponent /> : children}</>
}
