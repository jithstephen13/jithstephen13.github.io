
import { useRouter } from 'next/router'
import React from 'react'
import { Link } from 'react-scroll'

export const LinkCompo = (item) => {
                              const {page,label} = item
                            return ( <Link
                    
                              to={`${item.page}`}
                              
                    className={
                      "block lg:inline-block text-white  hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    
                   
                  >
                    {item.label}
                  </Link>)}
