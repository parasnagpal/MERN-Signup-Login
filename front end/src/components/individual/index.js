import React from 'react'
import { Row ,Container,Col, Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { BrowserRouter as Router,Switch,Route , Redirect} from "react-router-dom";
import Login from './login/login'
import SignUp from './signup/signup'
import Info_Request from '../info/info'
import axios from 'axios'

class Individual extends React.Component{
    constructor(){
        super()
        this.state={
            loggedin:false,
            firstlogin:false,
        }
        this.expand_signup=this.expand_signup.bind(this);
        this.login=this.login.bind(this);
        this.signup=this.signup.bind(this);
        this.signup_login=this.signup_login.bind(this);
        this.info_request=this.info_request.bind(this);
        this.main=this.main.bind(this);
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
            if(response.data=='profile')
                this.setState({
                    loggedin:true,
                    firstlogin:true,
                })
            else    
            this.setState({
                loggedin:true,
                ...login_data,
                password:null
            })
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

    signup_login(){
        return (
                <Row className="height_100">
                    <Col className="bg-white" id="login-col">
                        <Container fluid className="height_100">
                            <Login login={this.login}/>
                        </Container> 
                    </Col>
                    <Col className="d-flex flex-column justify-content-center bg-danger" id="signup-col" >
                        <SignUp expand={this.expand_signup} signup={this.signup}/>
                    </Col>
                </Row>
        );
    }

    info_request(){
        return(
                <Row className="height_100">
                    <Col className="d-flex flex-column justify-content-center bg-danger">
                        
                    </Col>
                </Row>
        );
    }

    main(){
        return(
            <Row className="height_100">
                <Col className="d-flex flex-column justify-content-center bg-danger">
                    Welcome to main page!!
                </Col>
            </Row>
        );
    }

    render(){
        return(
            <Container className="container">
                <Router>
                    {(this.state.loggedin)?((this.state.firstlogin)?<Redirect to='/profile'/>:<Redirect to='/main'/>):<Redirect to='/'/>}
                    <Switch>
                        <Route exact path="/" >{this.signup_login()}</Route>
                        <Route path="/profile">{this.info_request()}</Route>
                        <Route path="/main">{this.main()}</Route>
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default Individual; 