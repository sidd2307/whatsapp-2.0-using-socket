import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import logo from '../assets/logo.png'

export default function Login({ onIdSubmit }) {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }

    return (
        <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
            <img src={logo} alt="" />
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>
                        Enter Your ID
                    </Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" style={{ margin: "10px 10px 10px 0" }}>
                    Login
                </Button>
                <Button onClick={createNewId} variant="secondary" style={{ margin: "10px 10px 10px 0" }}>
                    Create a New ID
                </Button>
            </Form>
        </Container>
    )
}
