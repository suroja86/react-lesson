import React from "react";
import * as axios from "axios";
import './table.scss'

const Table = (props) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        const headers = {
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'custom-header'
        };
        axios.get(apiUrl, {headers}).then((response) => {
            setPost(response);
        });
    }, []);

    console.log(post);

    if (!post.data) return null;

    // https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%BE%D0%B2_HTTP#%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5_%D0%B7%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8

    let dataTable = post.data.map((d) =>
            <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
            </tr>
        );

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
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