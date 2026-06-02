import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserProfile from './component/UserProfile.jsx'
import LifecycleDemo from './component/LifecycleDemo.jsx'
import UserCard from './component/UserCard.jsx'
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
const userCards = [
    { 
        id: 1, 
        name: "Nguyễn Văn A", 
        email: "nguyenvana@gmail.com", 
        img: "https://i.pravatar.cc/150?img=11" 
    },
    { 
        id: 2, 
        name: "Trần Thị B", 
        email: "tranthib@gmail.com", 
        img: "https://i.pravatar.cc/150?img=5" 
    },
    { 
        id: 3, 
        name: "Lê Văn C", 
        email: "levanc@gmail.com", 
        img: "https://i.pravatar.cc/150?img=13" 
    },
    { 
        id: 4, 
        name: "Phạm Thị D", 
        email: "phamthid@gmail.com", 
        img: "https://i.pravatar.cc/150?img=9" 
    },
    { 
        id: 5, 
        name: "Hoàng Văn E", 
        email: "hoangvane@gmail.com", 
        img: "https://i.pravatar.cc/150?img=15" 
    }
];
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <LifecycleDemo/>
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
        {
            userCards.map(card=>(
                <UserCard 
                key={card.id}
                name={card.name}
                email={card.email}
                img={card.img}
                />
            ))
}

    </>
  )
}

export default App
