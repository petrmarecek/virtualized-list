import React from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { Constants } from '../utils/constants'
import { Wrapper, ListWrapper, Row } from './styles'
import { getData } from '../utils/getData'

export const List = () => {
  const data = getData(Constants.DATA_COUNTER)
  const parentRef = React.useRef()
  const rowVirtualizer = useVirtualizer({
    count: Constants.DATA_COUNTER,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 25,
    overscan: 5,
  })

  return (
    <Wrapper ref={parentRef}>
      <ListWrapper height={rowVirtualizer.getTotalSize()}>
        {rowVirtualizer.getVirtualItems().map((item, key) => (
          <Row key={key} height={item.size} start={item.start}>
            {data[item.index]}
          </Row>
        ))}
      </ListWrapper>
    </Wrapper>
  )
}
