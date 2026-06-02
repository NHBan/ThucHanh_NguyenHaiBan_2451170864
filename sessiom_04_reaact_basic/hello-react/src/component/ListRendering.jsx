function ListRendering()
{
    const listData = [
    { id: 1, name: "Cà phê đen", price: 20000 },
    { id: 2, name: "Trà đào cam sả", price: 35000 },
    { id: 3, name: "Trà sữa trân châu", price: 40000 },
    { id: 4, name: "Nước ép dưa hấu", price: 3330000 },
    { id: 5, name: "Sinh tố bơ", price: 45000 }
];
const totalPrice=listData.reduce((sum,data)=>sum+data.price,0)
return(
    <>
    <h2>Danh sach cac loai nuoc uong la</h2>
    {listData.map(data=>{
        <div>
            <p>ten san pham {data.name}
        </p>
        <p
        style={{color:data.price>1000000?'red':'black'}}
        >gia san pham {data.price}
        </p>
       <p>Tong gia tri cua menu la {totalPrice}</p>
        </div>
    })}
    </>
)
}