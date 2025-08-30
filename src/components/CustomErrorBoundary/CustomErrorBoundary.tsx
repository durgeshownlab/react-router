import type { ComponentType, FC, ReactNode } from "react"
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

interface CustomErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent?: ComponentType<FallbackProps>
}

const CustomFallbackUI = ({error, resetErrorBoundary}: FallbackProps)=>{
  return (<>
    <div>
      <h3>Oops! Something went wrong.</h3>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary} >Retry</button>
    </div>
  </>)
}


const CustomErrorBoundary: FC<CustomErrorBoundaryProps> = ({children, FallbackComponent=CustomFallbackUI}) => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} >
      {children}
    </ErrorBoundary>
  )
}

export default CustomErrorBoundary
