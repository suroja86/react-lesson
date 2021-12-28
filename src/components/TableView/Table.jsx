import React from "react";
import * as axios from "axios";
import apiKey from "./apiKey";
import './table.scss'

const Table = (props) => {
    const apiUrl = "https://social-network.samuraijs.com/api/1.0/users?api-key=" + apiKey;

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(apiUrl).then((response) => {
            setPost(response.data.items);
        });
    }, []);
    if (!post) return null;

    let dataTable = post.map((d) =>
            <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
            </tr>
        );

    // axios.get(apiUrl).then((response) => {
    //     tableData(response.data.items)
    // });
    // let tableData = (dataTable) => {
    //     dataTable.map((d) =>
    //         <tr key={d.id}>
    //             <td>{d.id}</td>
    //             <td>{d.name}</td>
    //         </tr>
    //     );
    // }
    // console.log(tableData);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                { dataTable }
                </tbody>
            </table>
        </div>
    );
}

export default Table;