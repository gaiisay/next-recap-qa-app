import Link from 'next/link'
import styled from 'styled-components'

function QuestionAnswerList({ questions, answers }) {
  if (questions) {
    return (
      <StyledList>
        {questions?.map((question) => {
          return (
            <li key={question.id}>
              <Link href={`/${question.id}`}>
                <div>
                  <h2>{question.question}</h2>
                  <p>{question.submitter}</p>
                  <p>
                    {new Date(question.submissionDate).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </li>
          )
        })}
      </StyledList>
    )
  }

  return (
    <StyledList>
      {answers?.map((answer) => {
        return (
          <li key={answer.id}>
            <div>
              <h2>{answer.answer}</h2>
              <p>{answer.submitter}</p>
              <p>{new Date(answer.submissionDate).toLocaleDateString()}</p>
            </div>
          </li>
        )
      })}
    </StyledList>
  )
}

const StyledList = styled.ul`
  list-style: none;
  padding: 1rem;

  li {
    margin: 2rem;
    border-radius: 10px;
    background-color: #6d9886;
    overflow-wrap: break-word;
    width: 50vw;
    transition: 0.5s;
  }

  div {
    padding: 1.5rem;
  }
`

export default QuestionAnswerList
