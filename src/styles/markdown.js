import {css} from 'emotion'
import {main} from '~/theme'


export default css`
  a {
    color: ${main.colors.darkPink};
  }

  code {
    background: rgba(120, 120, 120, 0.15);
  }

  pre {
    background: rgba(120, 120, 120, 0.15);
    border-radius: 4px;
    padding: 8px;

    code {
      background: none;
    }
  }

  ul, ol {
    padding-left: 32px;
    margin-bottom: 1rem;

    li {
      list-style: disc;
      li {
        list-style: circle;
        li {
          list-style: square;
        }
      }
    }
  }
`
