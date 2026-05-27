import '../App.css'
function UserProfile() {
    return(
    <>
<div className="profile">
    <h1>Hồ sơ cá nhân</h1>
    <img src="https://th.bing.com/th/id/OIP.T2BC9LF6fPQJytV06_9sPgHaIz?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Ảnh đại diện"/>
    <table>
        <tr>
            <td>Họ tên:</td>
            <td>Minh</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>minh@example.com</td>
        </tr>
    </table>
</div>
    </>
    )
}
export default UserProfile