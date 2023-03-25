import React, { Component } from "react";
import styles from '../styles/Home.module.css'

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correct: null,
            selectedOption: null,
            words:this.props.words
        }
        this.word = this.state.words[0].word;
        this.def = this.state.words[0].def;

        this.array = this.randomize(this.props.words);
        this.handleChange = this.handleChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ words: nextProps.words }); 
        this.word = this.state.words[0].word;
        this.def = this.state.words[0].def;

        this.array = this.randomize(this.state.words); 
    }

    handleChange(event) {
        this.setState({
            correct:null,
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        
        event.preventDefault();
        if(this.def === this.state.selectedOption){
            this.setState({
                correct: "Correct!"
            })
        } else{
            this.setState({
                correct: "Try again.."
            })
        }
    }

    randomize(words) {
        for (var i=0; i<words.length; i++) {
		    var rPos = Math.floor(Math.random() * words.length );
		    var temp = words[i];
		    words[i] = words[rPos];
		    words[rPos] = temp;
		}
 
		return words;
    }

    render() {

        return (
            <form onSubmit={this.formSubmit}>
                <p>Select a definition for {this.word}:</p>

                <div>
                   
                        <input
                            type="radio"
                            name="question"
                            value={this.array[0].def}
                            checked={this.state.selectedOption === this.array[0].def}
                            onChange={this.handleChange}
                        />
                        {this.array[0].def}
                   
                </div>

                <div>
                   
                        <input
                            type="radio"
                            name="question"
                            value={this.array[1].def}
                            checked={this.state.selectedOption === this.array[1].def}
                            onChange={this.handleChange}
                        />
                        {this.array[1].def}
                    
                </div>

                <div>
                    
                        <input
                            type="radio"
                            name="question"
                            value={this.array[2].def}
                            checked={this.state.selectedOption === this.array[2].def}
                            onChange={this.handleChange}
                        />
                        {this.array[2].def}
                   
                </div>
                <div>
                    
                        <input
                            type="radio"
                            name="question"
                            value={this.array[3].def}
                            checked={this.state.selectedOption === this.array[3].def}
                            onChange={this.handleChange}
                        />
                        {this.array[3].def}
                    
                </div>
               <p>Your answer: {this.state.selectedOption}</p>
               
               <p>{this.state.correct}</p>
                <button type="submit">Submit your answer</button>
                
            </form>


        );

    }




}
export default Question;