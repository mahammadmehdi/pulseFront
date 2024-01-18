import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./index.scss"

function Detail() {

    const [detail, setDetail] = useState([])

    const {id} = useParams()
useEffect(() => {
    fetch("http://localhost:3000/"+id)
    .then((res) => res.json())
    .then((data) => setDetail(data));
}, [])


  return (
    <div className='detailPage'>
        <div className="card">
            <div className="pages">
                <li className='name'>{detail.name}</li>
               <div className='descPrice'> <li className='desc'>{detail.desc}</li>
                <li className='price'>${detail.price}.00</li>
</div>
            </div>
        </div>
    </div>
  )
}

export default Detail