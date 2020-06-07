import React from 'react'
import {Container,Row,Col,Button,Form,FormGroup,Input,Label} from 'reactstrap'

class SignUpIndividual extends React.Component{
    constructor(props){
        super(props);
        this.state={
            expanded:false,
            email:"",
            password:"",
            password_confirm:"",
            individual:false,
            organization:false,
            bio:null,
            linkedin:null,
            profile_image:null
        }
        this.signup=this.signup.bind(this);
        this.emailchange=this.emailchange.bind(this);
        this.passwordchange=this.passwordchange.bind(this);
        this.passwordconfirmchange=this.passwordconfirmchange.bind(this);
        this.organization=this.organization.bind(this);
        this.individual=this.individual.bind(this);
    }

    signup(){
        this.props.expand();
        this.setState({
            expanded:true
        })
    }

    emailchange(event){
        this.setState({
            email:event.target.value
        })
    }

    passwordchange(event){
        this.setState({
            password:event.target.value
        })
    }

    passwordconfirmchange(event){
        this.setState({
            password_confirm:event.target.value
        },()=>{
            console.log(event.target)
        })
    }

    organization(){
        this.setState({
            organization:true,
            individual:false
        })
    }

    individual(){
        this.setState({
            organization:false,
            individual:true
        })
    }

    expanded(){
        return(
            <Container>
                <Row className="luckiest-guy em-2 d-flex justify-content-center">Sign Up</Row>
                <Row className="d-flex justify-content-center">
                    <Form row>
                        <FormGroup>
                            <Input placeholder="Email" type='email' value={this.state.email} onChange={this.emailchange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Password" type='password' value={this.state.password} onChange={this.passwordchange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Confirm Password" type='password' value={this.state.password_confirm} onChange={this.passwordconfirmchange}></Input>
                        </FormGroup>
                        <div className="d-flex">
                        <FormGroup check className="d-flex justify-content-start m-2">
                            <Label check>
                              <Input type="radio" name="radio2" onChange={this.individual}/>{' '}
                              Individual
                            </Label>
                        </FormGroup>
                        <FormGroup check className="d-flex justify-content-start m-2">
                            <Label check>
                              <Input type="radio" name="radio2" onChange={this.organization}/>{' '}
                              Organization
                            </Label>
                        </FormGroup>
                        </div>
                        <FormGroup>
                            <Button color='light' outline onClick={()=>{this.props.signup(this.state)}}>Sign Up</Button>
                        </FormGroup>
                    </Form>
                </Row>
            </Container>
        );
    }

    not_expanded(){
        return(
            <div>
                <div className="luckiest-guy em-2">Hello!</div>
                <div>
                    <p>Start your Journey with us!</p>
                    <Button color='light' outline onClick={this.signup}>Sign Up</Button>
                </div>
            </div>
        );
    }

    render(){
        if(!this.state.expanded)
            return this.not_expanded()
        else return  this.expanded()   
    }
}

export default SignUpIndividual;