import React from 'react'
import {Input,Form,FormGroup,Button,Label} from 'reactstrap'

class LoginIndividual extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            individual:false,
            organization:false
        };
        this.emailchange=this.emailchange.bind(this);
        this.passwordchange=this.passwordchange.bind(this);
        this.organization=this.organization.bind(this);
        this.individual=this.individual.bind(this);
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

    render(){
        return(
            <div className="d-flex flex-column height_100">
                <div className="text-dark font-weight-bold p-3 luckiest-guy em-2">Sign In</div>
                <div className="d-flex flex-column justify-content-center flex-grow-1">
                    <Form>
                        <FormGroup>
                            <Input placeholder="Email" className="bg-light"  type='email' value={this.state.email} onChange={this.emailchange}/>
                        </FormGroup>
                        <FormGroup>    
                            <Input placeholder="Password" className="bg-light" type='password' value={this.state.password} onChange={this.passwordchange}/>
                        </FormGroup>
                        <div className="d-flex justify-content-around text-dark">
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
                        <Button color="danger" className="rounded m-2" onClick={()=>{this.props.login(this.state)}}>Sign In</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            
        );
    }
}

export default LoginIndividual;