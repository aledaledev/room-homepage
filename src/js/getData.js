const getData = async ()=>{
    const res = await fetch("./data/data.json")
    return await res.json()
}
export default getData