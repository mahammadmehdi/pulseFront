import React from 'react'
import "./index.scss"

function OurServices() {
  return (
    <div className='ourServices'>
        <div className="ourServicesAll">
            <div className="icon"><i className="fa-solid fa-mortar-pestle"></i></div>
            <div className="head">Our Services</div>
            <div className="cards">
                <div className="card">
                    <div className="iconCard"><i className="fa-solid fa-mug-hot"></i></div>
                    <div className="name">Breakfast</div>
                    <div className="desc">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</div>
                </div>
                <div className="card">
                <div className="iconCard"><i className="fa-solid fa-cake-candles"></i></div>
                    <div className="name">Brunch</div>
                    <div className="desc">Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis</div>
                </div>
                <div className="card">
                <div className="iconCard"><i className="fa-solid fa-hotdog"></i></div>
                    <div className="name">Lunch</div>
                    <div className="desc">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</div>
                </div>
                <div className="card">
                <div className="iconCard"><i className="fa-solid fa-burger"></i></div>
                    <div className="name">Dinner</div>
                    <div className="desc">Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendreri.</div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OurServices