import './App.css';
import React from "react";

import {useVirtualizer} from "@tanstack/react-virtual";


function App() {
    let testData = [];
    const count = 10000;
    for (let i = 0; i < count; i++) {
        testData.push({
            id: i,
            subject: "ukol" + i,
        });
    }
    const parentRef = React.useRef();
    const rowVirtualizer = useVirtualizer({
        count: count,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 4,
    })

    console.log(testData)

    return (
        <div className="App" style={{}}>
            <div className={"container"} ref={parentRef} style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: '100%',
                position: 'relative',
            }}>
                {rowVirtualizer.getVirtualItems().map((itm) => (
                    <div>{testData[itm.index].subject}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
