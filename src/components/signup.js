import React ,{ useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";

function Signup(){
    const passwordPolicy = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[firsname,setFirstName]=useState("");
    const[lastname,setLastname]=useState("");
    const[errorMessage,setErrorMessage]=useState("");
    const[successMessage,setSuccessMessage]=useState("");


    const handleSignupSubmit=(e)=>{
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");
        if(!passwordPolicy.test(password)){
            setErrorMessage("Password should contain min 8 characters, special character,uppercase and lowercase each");
            return;
        }
        if(confirmPassword!==password){
            setErrorMessage("Passwords do not match");
            return;
        }
        setSuccessMessage("Account created");
    }

    return (
    <div>
        <Container className="d-flex justify-content-center align-items-center vh-80">
            <Card style={{width:"30rem"}}>
                <Card.Body>
                    <Card.Title className="mb-4">Sign Up</Card.Title>
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    <Form onSubmit={handleSignupSubmit}>
                        <Form.Group controlId="signupFirstName" className="mb-3 d-flex align-items-center">
                            <Form.Label className="text-start" style={{minWidth:"182px", marginLeft:"45px"}}>First Name</Form.Label>
                            <Form.Control 
                                type="text"    
                                placeholder="First Name"
                                value={firsname}
                                onChange={(e)=>setFirstName(e.target.value)}
                                required
                                /> 
                        </Form.Group>
                        <Form.Group controlId="signupLastName" className="mb-3 d-flex">
                            <Form.Label className="text-start" style={{minWidth:"182px", marginLeft:"45px"}}>Last Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Last Name"
                                value={lastname}
                                onChange={(e)=>setLastname(e.target.value)}
                                required
                                /> 
                        </Form.Group>
                        <Form.Group controlId="signupEmail" className="mb-3 d-flex">
                            <Form.Label className="text-start" style={{
                                minWidth:"182px",
                                marginLeft:"45px"
                            }}>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                            /> 
                        </Form.Group>
                        <Form.Group controlId="signupPassword" className="mb-3 d-flex">
                            <Form.Label className="text-start" style={{minWidth:"182px", marginLeft:"45px"}}>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                                /> 
                        </Form.Group>
                        <Form.Group controlId="signupReEnterPassword" className="mb-3 d-flex">
                            <Form.Label className="text-start" style={{minWidth:"182px", marginLeft:"45px"}}>Re-Enter password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Re-Enter password"
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                                required
                                /> 
                        </Form.Group>
                    <Button variant="primary" type="submit">Create Account</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>
    );
}

export default Signup;