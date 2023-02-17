export default function Table({data, virtualizer, parentRef}) {
    console.log(data);
    return (
        <div className={"table"}>
            <table ref={parentRef}>
                <tbody>
                 {virtualizer.getVirtualItems().map((virt)=>(
                     <tr>
                         <td>id: {data[virt.index].id}</td>
                         <td>{data[virt.index].subject}</td>
                     </tr>
                 ))}
                </tbody>
            </table>
        </div>
    );
}