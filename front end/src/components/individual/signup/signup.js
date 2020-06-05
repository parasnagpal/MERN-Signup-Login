import React from 'react'
import {Container,Row,Col,Button,Form,FormGroup,Input} from 'reactstrap'

class SignUpIndividual extends React.Component{
    constructor(props){
        super(props);
        this.state={
            expanded:false,
        }
        this.signup=this.signup.bind(this);
    }

    signup(){
        this.props.expand();
        this.setState({
            expanded:true
        })
    }

    expanded(){
        return(
            <Container>
                <Row className="luckiest-guy em-2 d-flex justify-content-center">Sign Up</Row>
                <Row className="d-flex justify-content-center">
                    <Form row>
                        <FormGroup>
                            <Input placeholder="Email"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Password"></Input>
                        </FormGroup>
                        <FormGroup>
                        <Input placeholder="Confirm Password"></Input>
                        </FormGroup>
                        <FormGroup>
                        <Button color='light' outline >Sign Up</Button>
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