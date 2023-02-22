import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 200px;
  width: 400px;
  overflow: auto;
`
export const ListWrapper = styled.div`
  height: ${props => `${props.height}px`};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const Row = styled.div`
  height: ${props => `${props.height}px`};
  transform: translateY(${props => `${props.start}px`});
  text-align: center;
  padding: 1rem 6rem;

  &:hover {
    background-color: #e5e5e5;
  }
`
