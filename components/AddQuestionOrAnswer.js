import { useState } from 'react'
import styled from 'styled-components'

function AddQuestionOrAnswer({ onAdd, buttonText = 'Send.' }) {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [questionInput, setQuestionInput] = useState('')

  return (
    <div>
      {isAddOpen ? (
        <>
          <StyledButton
            aria-label="close submission form"
            onClick={() => setIsAddOpen(false)}
          >
            x
          </StyledButton>
          <StyledForm
            onSubmit={(event) => {
              event.preventDefault()

              onAdd(questionInput)

              setQuestionInput('')
              setIsAddOpen(false)
            }}
          >
            <label htmlFor="post">Write your post here:</label>
            <textarea
              id="post"
              value={questionInput}
              onChange={(event) => setQuestionInput(event.target.value)}
            />
            <StyledButton type="submit">{buttonText}</StyledButton>
          </StyledForm>
        </>
      ) : (
        <StyledButton
          aria-label="expand submission form"
          onClick={() => setIsAddOpen(true)}
        >
          +
        </StyledButton>
      )}
    </div>
  )
}

const StyledButton = styled.button`
  width: 99px;
  height: 40px;

  background: #6d9886;
  border-radius: 100px;
  font-size: 1.5rem;
  cursor: pointer;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  width: 50vw;

  background: #515361;
  border-radius: 28px;
  font-size: 1.2rem;

  textarea {
    height: 100px;
    width: 300px;
    background-color: lightgray;
  }
`

export default AddQuestionOrAnswer
