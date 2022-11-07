import useSWR from 'swr'
import AddQuestionOrAnswer from '../components/AddQuestionOrAnswer'
import LoadingSpinner from '../components/LoadingSpinner'
import QuestionAnswerList from '../components/QuestionAnswerList'
import { fetcher, sendQuestion } from '../helpers/api'

function LandingPage() {
  const { data: questions, mutate } = useSWR('/api/questions', fetcher)

  async function addQuestion(question) {
    await sendQuestion(question)
    mutate()
  }

  if (!questions) return <LoadingSpinner />

  return (
    <>
      <section>
        <h1>Ask a dev!</h1>
        <p>
          Feel free to browse or ask any question while your identity stays
          stealthy and hidden.
        </p>
        <aside className="ninja">{"Like a freakin' ninja!"}</aside>
      </section>
      <section>
        <QuestionAnswerList questions={questions} />
        <AddQuestionOrAnswer onAdd={addQuestion} />
      </section>
    </>
  )
}

export default LandingPage
