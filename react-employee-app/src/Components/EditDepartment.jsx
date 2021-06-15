import React, { Component } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';
class EditDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackBarOpen: false,
            snackBarMsg: ''
        }
    }

    handleClose = (e) => {
        this.setState = ({ snackBarOpen: false, snackBarMsg: '' })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let target = e.target;
        fetch('https://localhost:44357/api/Department', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                DepartmentID: null,
                DepartmentName: target.DepartmentName.value
            })
        }).then(res => res.json()).then((result) => {
            this.setState({
                snackBarOpen: true,
                snackBarMsg: result
            })
        }, (error) => {
            this.setState({
                snackBarOpen: true,
                snackBarMsg: 'Thêm Thất bại'
            })
        })
        // console.log(this.state.snackBarMsg);
        // console.log(this.state.snackBarOpen);
    }
    render() {
        return (
            <div className='container'>
                <Snackbar
                    open={this.state.snackBarOpen}
                    autoHideDuration={3000}
                    onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        {this.state.snackBarMsg}
                    </Alert>
                </Snackbar>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Department
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Department Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Department Name" name='DepartmentName' />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                And Department
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide} variant='danger' >Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default EditDepartment;
