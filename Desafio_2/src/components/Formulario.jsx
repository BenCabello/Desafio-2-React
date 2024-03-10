import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Alert from './Alert.jsx';
import SocialButton from './SocialButton.jsx';


function Formulario() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("danger");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setMessage("Introduzca un correo electrónico válido.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Las contraseñas no coinciden.");
            return;
        }


        setMessage("Registro exitoso.");
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh'}}>
            <Container  style={{backgroundColor: 'white', borderRadius: '10px', width:'350px'}}>
                <Row className="justify-content-center">
                    <Col md='auto' >
                        <h2 className="text-center">Crear Cuenta</h2>
                        <div className="d-flex justify-content-center mb-3">
                            <SocialButton />
                        </div>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar Contraseña" />
                            </Form.Group>
                            <Button variant="outline-primary" type="submit" className="w-100 mb-2">Crear</Button>
                            <Alert message={message} variant={variant} />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>    
    );
}

export default Formulario;