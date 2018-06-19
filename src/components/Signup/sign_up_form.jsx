import React,{Component} from 'react';
import {Grid,Row,Col,form,FormGroup,ControlLabel,FormControl,FieldGroup} from 'react-bootstrap';

export default class SignUpForm extends Component {
    render(){
        return(
            <Grid style={{backgroundColor:'#f5f5f5',width:'100%',padding:'0px'}}>
                <Grid style={{backgroundColor:'white',width:'85%',marginTop:'15px',marginBottom:'15px'
            ,padding:'0'}} className='grid-class-sign'>
                    
                    <Row>  
                        <Col md={12} xs={12} >
                            <p className='class-paragraph'>
                            Hello! It's really great to see you here. Tell us just a few details about you and we are ready to go! ;)
                            </p>
                       </Col>                  
                       
                       <form>
                            <Col xs={12} md={12}>      
                                <FormGroup
                                    controlId="formBasicText"
                                    className='common'  
                                    >
                                
                                <ControlLabel>Your Name</ControlLabel>
                                <FormControl
                                        type="text"
                                        placeholder="Enter text"
                                    />
                                </FormGroup>                    
                            </Col>

                            <Col xs={12} md={12}>      
                                <FormGroup
                                    controlId="formBasicText"
                                    className='common'  
                                    >
                                
                                <ControlLabel>Your Email</ControlLabel>
                                <FormControl
                                        type="email"
                                        placeholder="Enter text"
                                    />
                                </FormGroup>                    
                            </Col>

                            <Col xs={12} md={12}>      
                                <FormGroup
                                    controlId="formBasicText"
                                    className='common'  
                                    >
                                
                                <ControlLabel>Your Website Address</ControlLabel>
                                <FormControl
                                        type="text"
                                        placeholder="Enter text"
                                    />
                                </FormGroup>                    
                            </Col>

                            <Col xs={12} md={12}>      
                                <FormGroup controlId="formControlsSelect" className='common'>
                                    <ControlLabel>What would you like to discuss?</ControlLabel>
                                    <FormControl componentClass="select" placeholder="--Choose--">
                                        <option value="select">General</option>
                                        <option value="other">Billing</option>
                                    </FormControl>
                                </FormGroup>                 
                            </Col>
                       </form>
                       
                    </Row>
                </Grid>
            </Grid>
        )
    }
}