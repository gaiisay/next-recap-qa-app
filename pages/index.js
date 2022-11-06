import Head from 'next/head'
import styled from 'styled-components'
import useSWR from 'swr'
import LoadingSpinner from '../components/LoadingSpinner'
import { fetcher } from '../helpers/api'

function LandingPage() {
  const { data: questions } = useSWR('/api/questions', fetcher)

  if (!questions) return <LoadingSpinner />

  return (
    <>
      <Head>
        <title>Ask away!</title>
      </Head>
      <section>
        <h1>Ask a dev!</h1>
        <p>
          Feel free to browse or ask any question while your identity stays
          stealthy and hidden.
        </p>
        <aside className="ninja">{"Like a freakin' ninja!"}</aside>
      </section>
      <section>
        <StyledList>
          {questions?.map((question) => {
            return <li key={question.id}>{question.question}</li>
          })}
        </StyledList>
      </section>
    </>
  )
}

const StyledList = styled.ul`
  list-style: none;
  padding: 1rem;

  li {
    margin: 2rem;
    padding: 1.5rem;
    border-radius: 10px;
    background-color: #6d9886;
    font-size: 1.4rem;
    overflow-wrap: break-word;
    max-width: 50vw;
  }
`

export default LandingPage
