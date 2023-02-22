import React from "react";

import {useVirtualizer} from "@tanstack/react-virtual";

import {createStore} from '@reduxjs/toolkit';
import styled from "styled-components";


function dataReducer(state = {value: []}, action) {
    if (action.type === "add") {
        state.value.push({id: state.value.length, subject: "ukol " + state.value.length});
        return state;
    }
}

const MainDiv = styled.div`
  height: 200px;
  width: 400px;
  overflow: auto;
`;
const Container = styled.div`
  height: ${props => props.height};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Row = styled.div`
  height: ${props => props.height};
  transform: translateY(${props => props.start});
  text-align: center;
  padding: 1rem 6rem;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const count = 10000;
let store = createStore(dataReducer);
for (let i = 0; i < count; i++) {
    store.dispatch({type: "add"})
}
function App() {

    const parentRef = React.useRef();
    const rowVirtualizer = useVirtualizer({
        count: count,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 35,
        overscan: 5,
    });

    return (
        <>
            <MainDiv className="App" ref={parentRef}>
                <Container className={"container"} height={`${rowVirtualizer.getTotalSize()}px`}>
                    {rowVirtualizer.getVirtualItems().map((itm) => (
                        <Row height={`${itm.size}px`} start={`${itm.start}px`}>{store.getState().value[itm.index].subject}</Row>
                    ))}
                </Container>
            </MainDiv>
        </>
    );
}

export default App;
