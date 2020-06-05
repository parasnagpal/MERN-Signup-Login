import React from 'react'
import {Input,Form,FormGroup,Button} from 'reactstrap'

class LoginIndividual extends React.Component{
    render(){
        return(
            <div className="d-flex flex-column height_100">
                <div className="text-dark font-weight-bold p-3 luckiest-guy em-2">Sign In</div>
                <div className="d-flex flex-column justify-content-center flex-grow-1">
                    <Form>
                        <FormGroup>
                            <Input placeholder="Email" className="bg-light"/>
                            <Input placeholder="Password" className="bg-light"/>
                        <Button color="danger" className="rounded m-2">Sign In</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            
        );
    }
}

export default LoginIndividual;