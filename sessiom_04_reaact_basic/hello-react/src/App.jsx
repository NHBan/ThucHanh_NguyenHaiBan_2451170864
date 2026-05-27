import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserProfile from './component/UserProfile.jsx'
import './App.css'
function StudentCard() {
    return (
        <div className="card">         {/* class → className */}
            <img src="avatar.jpg" alt="Avatar" />  {/* Đóng thẻ */}
            <h2>Nguyen Hai Ban</h2>
            <p>Sinh viên năm 3</p>
            <label htmlFor="email">Email:</label>   {/* for → htmlFor */}
            <input type="email" id="email" />       {/* Đóng thẻ */}
        </div>
    );
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <UserProfile/>
    <StudentCard/>
      <div>
            <h1>Tên của bạn ở đây</h1>
            <p>Hôm nay là ngày đẹp trời</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    </>
  )
}

export default App
