import type { MetaFunction } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"
import {Button} from '@mui/material'

import { pageTitle } from "~/config/page"

export const meta: MetaFunction = () => ({
  title: pageTitle('Test')
})

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is a Test Page!</h1>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Back to index
      </Button>
    </div>
  )
}

export default TestPage