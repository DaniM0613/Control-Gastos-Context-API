import { ReactNode } from 'react'

type ErrorMessageProps = {
    children: ReactNode
}

function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <p className="bg-red-500 p-2 font-bold text-sm text-white text-center">
      {children}
    </p>
  )
}

export default ErrorMessage
