import React, {Component} from 'react';
import AddExercise from './AddExercise';
import {Row, Container} from 'react-bootstrap';

import {connect} from 'react-redux';
import {showExercise} from './actions/exercisesActions';

class App extends Component{

  componentDidMount(){
    this.props.showExercise();
  }
 
  render(){
    const exercises = (this.props).exercises;
    let actualResult=((exercises.length)===0)?'':(exercises[exercises.length-1].result);

    return (
      <Container>
        <Row><AddExercise/></Row>
        <Row><h6>Resultado</h6></Row>
        <Row><div>{actualResult}</div>  </Row>
        
            
      </Container>
        
    )}
}

const mapToStateToProps=state=>({
  exercises:state.exercises.exercises
})
export default connect(mapToStateToProps,{showExercise})(App);
