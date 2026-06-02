function TernaryDemo()
{
    const isOnline=true
    const isLoggedIn=true;
    const stock=0
    return (
        <>
        <h3>
            Trang thai:
            {isOnline && "🟢 online"}
            {!isOnline && "🔴 offline"}
        </h3>
        {isLoggedIn&&(
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Contact</li>
            </ul>
        ) }
        {!!stock&&(
            <strong>X het hang r nha</strong>
        )}
        </>
    )
}
export default TernaryDemo