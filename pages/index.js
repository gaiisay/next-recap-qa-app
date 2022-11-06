import useSWR from 'swr'
import LoadingSpinner from '../components/LoadingSpinner'
import QuestionAnswerList from '../components/QuestionAnswerList'
import { fetcher } from '../helpers/api'

function LandingPage() {
  const { data: questions } = useSWR('/api/questions', fetcher)

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
      </section>
    </>
  )
}

export default LandingPage
