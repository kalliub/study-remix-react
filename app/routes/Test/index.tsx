import { useNavigate } from "@remix-run/react"

const TestPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>This is a test route!</h1>
      <button type="button" onClick={() => navigate(-1)}>Go back!</button>
    </div>
  )
}

export default TestPage