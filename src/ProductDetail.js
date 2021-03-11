import React, { useEffect, useState }  from 'react'

// match parameter get as a props

export default function ProductDetail({match}) {

    const [itemDetail, setItemDetail] = useState();

    const fetchItemDetail = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const items = await data.json();
        setItemDetail(items)
    }
    useEffect(() => {
        fetchItemDetail();   
    }, [])
    
    return (
        <div>
            <h1>{ itemDetail && itemDetail.data.item.name}</h1>
            <img src={itemDetail && itemDetail.data.item.images.background} alt="" style={{width:"300px",height:"300px"}}></img>
        </div>
    )
}
