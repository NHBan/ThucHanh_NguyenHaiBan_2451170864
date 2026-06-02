function UserCard(props)
{
    return(
        <>
            <h2>Xin chào {props.name}!</h2>
            <p>Email: {props.email}</p>
           <img src={props.img} alt="" />
        </>
    )
}
export default UserCard