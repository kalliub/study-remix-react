import type { MetaFunction } from "@remix-run/node"
import { useNavigate } from "@remix-run/react"
import {Button, Typography} from '@mui/material'

import { pageTitle } from "~/config/page"

export const meta: MetaFunction = () => ({
  title: pageTitle('Test')
})

const TestPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h1"> This is a Test Page</Typography>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Go Back!
      </Button>
    </div>
  )
}

export default TestPage