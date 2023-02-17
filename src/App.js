import './App.css';
import React from "react";

import { useVirtualizer } from "@tanstack/react-virtual";

import { createStore } from '@reduxjs/toolkit';


function dataReducer(state = { value: [] }, action) {
    if (action.type === "add") {
        state.value.push({ id: state.value.length, subject: "ukol" + state.value.length });
        return state;
    }
}

function App() {
    const count = 10000;
    let store = createStore(dataReducer);
    for (let i = 0; i < count; i++) {
        store.dispatch({ type: "add" })
    }
    const parentRef = React.useRef();
    const rowVirtualizer = useVirtualizer({
        count: count,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 4,
    });

    return (
        <div className="App" style={{}}>
            <div className={"container"} ref={parentRef} style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: '100%',
                position: 'relative',
            }}>
                {rowVirtualizer.getVirtualItems().map((itm) => (
                    <div>{store.getState().value[itm.index].subject}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
