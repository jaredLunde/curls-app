import React from 'react'
import Inject from 'react-cake/es/Inject'
import {Type, Button, Drawer, BreakPoint} from 'styled-curls'
import {css} from 'emotion'
import Hamburger_ from './Hamburger'


function CloseBox_ ({toggle}) {
  return Button({
    bg: 'lightestGrey',
    p: '4 b3',
    d: 'block',
    br: 0,
    w: '100%',
    bw: 0,
    justify: 'start',
    onClick: toggle,
    children: Type({md: true, children: '✕'})
  })
}

const drawerCSS = css`top: 0; bottom: auto;`


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
        className: drawerCSS,
        fromBottom: true,
        children: function ({DrawerBox, toggle, hide, isVisible}) {
          return (
            <>
              <Inject>
                {DrawerBox({
                  className: drawerCSS,
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
