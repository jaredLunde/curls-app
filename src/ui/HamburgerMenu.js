import React from 'react'
import {Inject} from 'react-cake'
import {A, Drawer, BreakPoint} from 'styled-curls'
import Hamburger_ from './Hamburger'


function CloseBox_ ({toggle}) {
  return A({
    bg: 'darkestGrey',
    p: '4 b3',
    lg: true,
    db: true,
    color: 'pink',
    onClick: toggle,
    children: '✕'
  })
}


export default function HamburgerMenu ({
  Hamburger = Hamburger_,
  CloseBox = CloseBox_,
  children,
  ...props
}) {
  return BreakPoint({
    sm: true,
    ...props,
    children: function ({matchesAll}) {
      return matchesAll && Drawer({
        fromBottom: true,
        children: function ({DrawerBox, toggle, hide, isVisible}) {
          return (
            <>
              <Inject>
                {DrawerBox({
                  w: '100%',
                  touchScrolling: true,
                  children: function ({isVisible, toggle}) {
                    return(
                      <>
                        {CloseBox({toggle})}
                        {children({isVisible, hide})}
                      </>
                    )
                  }
                })}
              </Inject>

              {Hamburger({onClick: toggle})}
            </>
          )
        }
      })
    }
  })
}
