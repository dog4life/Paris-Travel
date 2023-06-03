import React from 'react'
import './Places.css'

function Places() {
  return (
    <div>
      <br></br>
      <h1 className="heading">Places</h1>
      <br></br>
      <div className="box-places">
      {/* Right way to add Inline Styles in JSX */}
      <div class="card" style={{ width: '18rem', margin: '20px 0px' }}>
        {/* <div class="card" style="width: 18rem;"> */}
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Eiffel Tower</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem', margin: '20px 0px' }}>
        {/* <div class="card" style="width: 18rem;"> */}
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Arc de Triomphe</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem', margin: '20px 0px' }}>
        {/* <div class="card" style="width: 18rem;"> */}
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Luxemburg Garden</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem', margin: '20px 0px' }}>
        {/* <div class="card" style="width: 18rem;"> */}
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Musee d'Orsay</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem', margin: '20px 0px' }}>
        {/* <div class="card" style="width: 18rem;"> */}
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Tuileries Garden</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem', margin: '20px 0px' }}>
        {/* <div class="card" style="width: 18rem;"> */}
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Sainte-Chapel</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem', margin: '20px 0px' }}>
        {/* <div class="card" style="width: 18rem;"> */}
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Louvre Museum</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card" style={{ width: '18rem', margin: '20px 0px' }}>
        {/* <div class="card" style="width: 18rem;"> */}
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/25/12/eiffel.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Catherdale Notre-Dame de Paris</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default Places
