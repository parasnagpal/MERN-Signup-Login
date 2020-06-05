import React from 'react'
import {Input,Form,FormGroup,Button} from 'reactstrap'

class LoginIndividual extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        };
        this.emailchange=this.emailchange.bind(this);
        this.passwordchange=this.passwordchange.bind(this);
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