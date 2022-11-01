import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'
class QuizQuestion extends Component {
  constructor(props){
    super(props)
    this.state = {incorrectAnswer:false }

  }
  handleClick(buttonText) {
    if(buttonText===this.props.quiz_question.answer){
      this.setState({incoorectAnswer: true})
      this.props.showNextQuestionHandler()
    }else{
      this.setState({incoorectAnswer: false})
    }

  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_options, index) => {
              return <QuizQuestionButton
                key={index} button_text={answer_options}
                clickHandler={this.handleClick.bind(this)} />
            })}

          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className='error'>Sorry, That is not right</p> : null}
      </main>
    )
  }
}
export default QuizQuestion