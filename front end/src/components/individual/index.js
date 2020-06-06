import React from 'react'
import { Row ,Container,Col} from 'reactstrap'
import LoginIndividual from './login/login'
import SignUpIndividual from './signup/signup'
import axios from 'axios'

class Individual extends React.Component{
    constructor(){
        super()
        this.expand_signup=this.expand_signup.bind(this);
        this.login=this.login.bind(this);
        this.signup=this.signup.bind(this);
    }

    expand_signup(){
        document.getElementById("login-col").classList.add('shrink')
        document.getElementById("signup-col").classList.add('expand')
    }

    login(login_data){
        console.log(login_data);
        axios({
            method:'post',
            url:'http://localhost:8000/login',
            data:login_data,
            responseType:'json'
        })
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    signup(signup_data){
        console.log(signup_data);
        axios.post('http://localhost:8000/signup',signup_data)
        .then(response=>{
            console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render(){
        return(
            <Container className="container">
                <Row className="height_100">
                    <Col className="bg-white" id="login-col">
                        <Container fluid className="height_100">
                            <LoginIndividual login={this.login}/>
                        </Container> 
                    </Col>
                    <Col className="d-flex flex-column justify-content-center bg-danger" id="signup-col" >
                        <SignUpIndividual expand={this.expand_signup} signup={this.signup}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Individual; 