import { Link, Outlet } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
      <h2>React Hooks List</h2>
      <ol>
        <li><Link to="useState">useState</Link></li>
        <li><Link to="useEffect">useEffect</Link></li>
        <li><Link to="useEffectApi">useEffectApi</Link></li>
        <li><Link to="useRef">useRef</Link></li>
        <li><Link to="useReducer">useReducer</Link></li>
        <li><Link to="useMemo">useMemo</Link></li>
        <li><Link to="useCallBack">useCallBack</Link></li>
      </ol>

      <Outlet />
    </div>
  )
}

export default Hook
