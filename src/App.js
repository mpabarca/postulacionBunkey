import React, {Component} from 'react';
import AddExercise from './AddExercise';

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
      <div>
        <AddExercise />
        <h6>Resultado</h6>
        <div>{actualResult}</div>        
      </div>
        
    )}
}

const mapToStateToProps=state=>({
  exercises:state.exercises.exercises
})
export default connect(mapToStateToProps,{showExercise})(App);
