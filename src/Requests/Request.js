
export  const productsReq = async (func) =>{
    try{
        await fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=>{
            func(data)
        })
    }catch(e){
        console.log(e)
    }
}