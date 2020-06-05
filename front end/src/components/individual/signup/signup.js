import React from 'react'
import {Input,Form,FormGroup,Button} from 'reactstrap'

class SignUpIndividual extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <div className="luckiest-guy em-2">Hello!</div>
                <div>
                    <p>Start your Journey with us!</p>
                    <Button color='light' outline onClick={this.props.expand}>Sign Up</Button>
                </div>
            </div>
        );
    }
}

export default SignUpIndividual;