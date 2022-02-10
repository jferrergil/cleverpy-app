import {render} from "../../utils/test-utils"
import Home from "./Home"


const mockPosts = [{id: 1, body: "This is a test body", title: "This is a test title", userId: 1},{id: 1, body: "This is a test body", title: "This is a test title", userId: 1},{id: 1, body: "This is a test body", title: "This is a test title", userId: 1},{id: 1, body: "This is a test body", title: "This is a test title", userId: 1},{id: 1, body: "This is a test body", title: "This is a test title", userId: 1},{id: 1, body: "This is a test body", title: "This is a test title", userId: 1}]

describe("Given home component", () => {
    test("It renders", () =>{
        render(<Home/>, {preloadedState: {data: {posts: mockPosts}}})
    })

   
})