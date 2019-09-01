import React, { useState } from 'react'
import './app.css'
import { connect } from 'react-redux'
import { addQuestion, removeQuestions, sortQuestions } from './actions'
import AccordionItem from './components/accordion-item'
import TooltipTitle from './components/tooltip-title'

function App(props) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const submit = () => {
    props.addQuestion(question, answer)
    setAnswer('')
    setQuestion('')
  }
  return (
    <div className="app">
      <h1>The awesome Q/A tool</h1>
      <TooltipTitle
        title="Created questions"
        tooltip=" Here you can find created questions and their answers"
      />
      {props.questions.length ? (
        <div className="accordion">
          {props.questions.map((el, idx) => (
            <AccordionItem item={el} key={idx} />
          ))}
        </div>
      ) : (
        <div className="accordion--empty">No questions yet</div>
      )}
      <div className="buttons-container">
        <button className="info" onClick={() => props.sortQuestions()}>
          Sort questions
        </button>
        <button onClick={() => props.removeQuestions()}>Remove questions</button>
      </div>
      <TooltipTitle
        title="Create a new question"
        tooltip=" Here you can create a question and provide an answer"
      />
      <div className="form-group">
        <label htmlFor="question">Question</label>
        <input
          type="text"
          name="question"
          value={question}
          onChange={evt => setQuestion(evt.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="answer">Answer</label>
        <textarea
          value={answer}
          onChange={evt => setAnswer(evt.target.value)}
        />
        <button className="submit" onClick={submit}>
          Create a question
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  questions: state.questions,
})

const mapDispatchToProps = dispatch => ({
  addQuestion: (question, answer) => dispatch(addQuestion(question, answer)),
  removeQuestions: () => dispatch(removeQuestions()),
  sortQuestions: () => dispatch(sortQuestions()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
