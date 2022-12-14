import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import AddQuestionOrAnswer from '../../components/AddQuestionOrAnswer'
import LoadingSpinner from '../../components/LoadingSpinner'
import QuestionAnswerList from '../../components/QuestionAnswerList'
import { fetcher, sendAnswer } from '../../helpers/api'

export default function Question() {
  const router = useRouter()
  const { questionId } = router.query
  async function addAnswer(answer) {
    await sendAnswer(question.id, answer)
    mutate()
  }

  const {
    data: question,
    error,
    mutate,
  } = useSWR(`/api/questions/${questionId}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!question) return <LoadingSpinner />

  return (
    <>
      <h1>{question.question}</h1>
      <QuestionAnswerList answers={question.answers} />
      <AddQuestionOrAnswer onAdd={addAnswer} />
    </>
  )
}
