import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h full inline-block z-0 bg-light p-0 m-0  ${className}`}>
       {children}
    </div>
  )
}

export default Layout