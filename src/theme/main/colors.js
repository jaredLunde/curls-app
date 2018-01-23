import {defaultColors} from 'styled-curls'
import {darken} from 'polished'


export const pink = '#F03861'
export const darkPink = darken(0.15, pink)


export default {
  primaryText: defaultColors.darkestGrey,
  emphasisText: defaultColors.black,
  accentText: defaultColors.grey,
  primaryLink: defaultColors.darkGrey,
  activeNav: darkPink,
  asideBg: defaultColors.white,
  asideHeaderBg: defaultColors.translucentWhite,
  lighterGrey: 'rgb(230, 230, 230)',
  accent: defaultColors.lightestGrey,
  pink,
  darkPink,
}
