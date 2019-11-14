import React from "react";
import TableList from "../components/Table";


export default class TableArea extends Component {
    constructor() {
        super();
        this.state = {
            users: [{}],
            order: "descend",
            filteredUsers: [{}],
            headings: [
                { name: "Image", width: "10%" },
                { name: "Name", width: "10%" },
                { name: "Phone", width: "20%" },
                { name: "Email", width: "20%" },
            ],
        }
    }


    
    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <TableList />
        )
    }
}

