import './Calculadora.css';
import React, { Component } from "react";
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';


const initialState = {
    displayValue: "0",
    values: [0,0],
    currentValue: 0,
    operation: null,
    clearDisplay: false
}

class Calculadora extends Component {
    
    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMemory =  this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.setOperation = this.setOperation.bind(this)
        
    }

    clearMemory() {
        this.setState( initialState )
    }
    setOperation(operation) {
        console.log(operation)
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            
            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
           
            
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
            })
        }
        
    }
    addDigit(digit) {
        if (digit === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' 
            || this.state.clearDisplay
        
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + digit
        this.setState({ displayValue, clearDisplay: false })

    }

    render() {
        return (
            <div className="Calculadora">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
    
    
            </div>
        )
    }
    
}

export default Calculadora
