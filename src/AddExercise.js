import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import './addExercise.css';

import {connect} from 'react-redux';
import {addExercises} from './actions/exercisesActions';

class AddExercise extends Component{
    
   num1Ref=React.createRef();
   num2Ref=React.createRef();
   operatorRef=React.createRef();

    addNewExercise=(e)=>{
        e.preventDefault();
        let num1=parseInt(this.num1Ref.current.value);
        let num2=parseInt(this.num2Ref.current.value);
        let operator= this.operatorRef.current.value;
        let result;
        if (operator==='add'){
            result=num1+num2
        }else if (operator==='subtract'){
            result=num1-num2
        }else if (operator==='divide'){
            result=num1/num2
        }else if (operator==='multiply'){
            result=num1*num2
        }
        let exercise={
            num1:num1,
            num2:num2,
            operator:operator,
            result:result
        };
        this.props.addExercises(exercise);

        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addNewExercise}>
                    <Row className="row-form"><input placeholder='Num1' type='text' ref={this.num1Ref}/></Row>
                    <Row className="row-form"><input placeholder='Num2' type='text' ref={this.num2Ref}/></Row>
                    <Row className="row-form">
                        <Col>
                            <select id="select" ref={this.operatorRef}>
                                <option value="">Operación</option>
                                <option value="add">Sumar</option>
                                <option value="subtract">Restar</option>
                                <option value="divide">Dividir</option>
                                <option value="multiply">Multiplicar</option>
                            </select>
                        </Col>
                        <Col><button type="submit">Calcular</button></Col>
                    </Row>
                </form>
            </div>
            
        )
    }
}

const mapStateToProps = state =>({
    exercises:state.exercises.exercises
})

export default connect (mapStateToProps, {addExercises})(AddExercise);