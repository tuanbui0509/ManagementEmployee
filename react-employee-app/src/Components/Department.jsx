import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Button, ButtonToolbar } from 'react-bootstrap'
import ModalDep from './ModalDep';
class Department extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], modalShow: false }
    }

    componentDidMount = () => {
        this.refreshList();
    }

    refreshList=()=>{
        fetch('https://localhost:44357/api/Department')
        .then(res => res.json())
        .then(data => {
            this.setState({ deps: data });
        })
    }

    componentDidUpdate() {
        this.refreshList();
    }
    render() {
        // ModalDep
        let { deps } = this.state;
        let addModalClose = () => this.setState({ modalShow: false });


        const element = deps.map((dep, index) => {
            return <tr key={dep.DepartmentID}>
                <td>{index + 1}</td>
                <td>{dep.DepartmentID}</td>
                <td>{dep.DepartmentName}</td>
            </tr>
        });
        return (
            <div className="container">
                <ButtonToolbar >
                    <Button variant='primary' onClick={() => this.setState({ modalShow: true })} >
                        Add Department
                    </Button>
                    <ModalDep show={this.state.modalShow} onHide={addModalClose} />
                </ButtonToolbar>
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
                            {element}
                        </tbody>
                    </Table>
                </div>

            </div>
        );
    }
}

export default Department;
