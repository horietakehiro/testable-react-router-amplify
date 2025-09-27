import {render, waitFor, screen} from "@testing-library/react"
import { createRoutesStub } from "react-router"
import { Welcome } from "./welcome"

test("hello world", async () => {
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: Welcome
    }
  ])

  render(<Stub initialEntries={["/"]}/>)
  await waitFor(() => screen.findByText("What's next?"))
})