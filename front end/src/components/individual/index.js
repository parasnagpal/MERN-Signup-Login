import React from 'react'
import { Row ,Container,Col} from 'reactstrap'
import LoginIndividual from './login/login'
import SignUpIndividual from './signup/signup'

class Individual extends React.Component{
    constructor(){
        super()
        this.expand_signup=this.expand_signup.bind(this);
    }

    expand_signup(){
        document.getElementById("login-col").classList.add('shrink')
        document.getElementById("signup-col").classList.add('expand')
    }

    render(){
        return(
            <Container className="container">
                <Row className="height_100">
                    <Col className="bg-white" id="login-col">
                        <Container fluid className="height_100">
                            <LoginIndividual/>
                        </Container> 
                    </Col>
                    <Col className="d-flex flex-column justify-content-center bg-danger" id="signup-col" >
                        <SignUpIndividual expand={this.expand_signup}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Individual; 