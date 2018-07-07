import React,{Component} from 'react';
import {Grid,Row,Col,Button,Panel,form,FormGroup,FormControl} from 'react-bootstrap';

export default class TypingBox extends Component{

    constructor(props){
        super(props);

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

        this.state={
            value:''
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.userMsg(this.state.value);
     }

    handleChange(e) {   
            this.setState({ value: e.target.value });
      }
        render(){
            return(
                <Row>
                    <form onSubmit={this.handleSubmit}>
                        <Col md={10}>
                            <FormGroup
                            style={{width:'100%'}}
                            controlId="formBasicText">
                                <FormControl
                                    style={{border:'2px solid #6d6666',borderRadius:'15px',width:'102%',height:'80%',fontSize:'130%'}}
                                    type="text"
                                    value={this.props.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                />                    
                            </FormGroup>
                        </Col>
                    <Col md={2} style={{paddingLeft:'0px'}}>
                            <Button type="submit" bsSize="large" >Send</Button>
                    </Col>
                </form>
              </Row>
            )
        }
}


