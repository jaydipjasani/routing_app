import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Products() {


    useEffect(() => {
        fetchItems();
    }, [])

    const [item, setItems] = useState();

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get");
        const items = await data.json();
        setItems(items)
    }

    return (
        <div>
            {item && item.data.map(value => {
                return <h2 key={value.itemId}>
                    <Link to={`/products/${value.itemId}`}>
                        {value.item.name}</Link></h2>
            })}
        </div>
    )
}
