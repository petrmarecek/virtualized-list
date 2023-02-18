import './App.css';
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
  height: 100vh;
  width: 100vw;
`;
const Container = styled.div`
  height: ${(props)=>{return props.height}};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  text-align: center;
  padding: 1rem 6rem;

  &:hover {
    background-color: #e5e5e5;
  }
`;


function App() {
    const count = 10000;
    let store = createStore(dataReducer);
    for (let i = 0; i < count; i++) {
        store.dispatch({type: "add"})
    }
    const parentRef = React.useRef();
    const rowVirtualizer = useVirtualizer({
        count: count,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 50,
    });

    return (
        <MainDiv className="App" style={{}}>
            <Container className={"container"} ref={parentRef} height={`${rowVirtualizer.getTotalSize()}px`}>
                {rowVirtualizer.getVirtualItems().map((itm) => (
                    <Row>{store.getState().value[itm.index].subject}</Row>
                ))}
            </Container>
        </MainDiv>
    );
}

export default App;
