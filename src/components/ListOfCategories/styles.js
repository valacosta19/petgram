import styledComponents, { css } from 'styled-components'

export const List = styledComponents.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding-bottom: 1rem;
  ${props => props.fixed && css`
    {
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      rigth: 0;
      top: -20px;
      transform: scale(.5);
      z-index: 1;
    }
  `}
`

export const Item = styledComponents.li`
  padding: 0 8px;
`
