import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = { dep: [] }
    }
    render() {

        return (
            <div className='mt-5 d-flex justify-content-center' >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>DepartmentID</th>
                            <th>DepartmentName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Department;
