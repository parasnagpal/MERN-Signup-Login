import React from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'

class Info extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bio:"",
            linkedin:"",
            profile_image:""
        }
        this.biochange=this.biochange.bind(this);
        this.linkedinchange=this.linkedinchange.bind(this);
        this.profile_imagechange=this.profile_imagechange.bind(this);
    }

    biochange(e){
        this.setState({
            bio:e.target.value,
        })
    }

    linkedinchange(e){
        this.setState({
            linkedin:e.target.value,
        })
    }

    profile_imagechange(e){
        this.setState({
            profile_image:e.target.files[0],
        })
    }

    render(){
        return(
            <Form>
                <FormGroup>
                    <Label>Bio</Label>
                    <Input type="textarea" required value={this.state.bio} onChange={this.biochange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>LinkedIn</Label>
                    <Input type="url" required value={this.state.linkedin} onChange={this.linkedinchange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Profile Picture</Label>
                    <Input type="image" required value={this.state.profile_image} onChange={this.profile_imagechange}></Input>
                </FormGroup>
                <FormGroup>
                    <Button color='light' onClick={this.props.profileSubmit}>Submit</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Info