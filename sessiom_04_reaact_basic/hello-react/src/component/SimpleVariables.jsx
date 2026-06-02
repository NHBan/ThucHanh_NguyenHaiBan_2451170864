function SimpleVariables()
{
    const ten="Nguyen Hai Ban"
    const tuoi="20"
    const queQuan="Nam Dinh"
    const gio =new Date().getHours
    const canNang = 65;
    const chieuCao = 1.75; 
    const loiChao=gio<12?"Chao buoi sang":gio<18?"Chao buoi chieu":"Chao buoi toi"
    return(
        <>
        <div className="container">
            <p>{loiChao}</p>
            <h3>Thông tin cá nhân:</h3>
            <ul>
                <li>Tên: {ten}</li>
                <li>Tuổi: {tuoi}</li>
                <li>Quê quán: {queQuan}</li>
            </ul>
            
            
            <h3>Sức khỏe:</h3>
            <p>BMI của bạn là: <strong>{bmi.toFixed(2)}</strong></p>
        </div>
        </>
    )
}
export default SimpleVariables