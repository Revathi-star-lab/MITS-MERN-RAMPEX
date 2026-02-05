import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Counter from './component/Counter'

import { Routes, Route } from 'react-router-dom'

import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import UseCallBack from './Hooks/UseCallBack'
import Hook from './Hooks/Hook'

import Login from './Auth/Login'
import Signedup from './Auth/Signedup'
import Todo from './component/Todo'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="P.Revathi" />} />
        <Route path="/about" element={<About name="P.Revathi" age={25} dept="Cyber Security" />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signedup" element={<Signedup />} />
        <Route path="/todo" element={<Todo/>}/>

        {/* NESTED ROUTES */}
        <Route path="/hook" element={<Hook />}>
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useEffectApi" element={<UseEffectApi />} />
          <Route path="useRef" element={<UseRef />} />
          <Route path="useReducer" element={<UseReducer />} />
          <Route path="useMemo" element={<UseMemo />} />
          <Route path="useCallBack" element={<UseCallBack />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
