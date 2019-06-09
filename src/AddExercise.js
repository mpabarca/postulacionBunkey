import React, {Component} from 'react';

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
                    <input placeholder='Num1' type='text' ref={this.num1Ref}/>
                    <input placeholder='Num2' type='text' ref={this.num2Ref}/>
                    <select ref={this.operatorRef}>
                        <option value="">Operación</option>
                        <option value="add">Sumar</option>
                        <option value="subtract">Restar</option>
                        <option value="divide">Dividir</option>
                        <option value="multiply">Multiplicar</option>
                    </select>
                    <button type="submit">Calcular</button>
                    
                </form>
            </div>
            
        )
    }
}


export default AddExercise;