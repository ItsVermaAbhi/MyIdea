
import './App.css'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Blogs } from './Pages/Blogs'
import { Blog } from './Pages/Blog'
import { Post } from './Pages/Post'


function App() {
 

  return (
    <>


        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/" element={<Signup></Signup>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
            <Route path='/blog' element={<Blogs></Blogs>}></Route>
            <Route path='/blog/:id' element={<Blog></Blog>}></Route>
            <Route path='/post' element={<Post></Post>}></Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
