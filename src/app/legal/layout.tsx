import React ,{type ReactNode} from 'react'
import Header from '../components/Header'
const LegalLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default LegalLayout