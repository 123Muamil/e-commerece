import React from 'react'

function SecondSection() {
  return (
    <div className='second-section gradient-animation'>
      <div className='section-content'>
        <div className='section-text'>
          <h2 className='section-title'>GREAT DESIGN</h2>
          <p className='section-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam nulla nam corporis fugit, ipsum nostrum architecto saepe id in consectetur distinctio? Alias numquam, aliquid placeat aut officia harum quidem dignissimos unde magni, rerum deserunt repellendus cupiditate, quibusdam ipsum! Optio architecto aliquid eius libero deserunt minima rem a perferendis quas.</p>
        </div>
        <div className='section-image1'>
          <img
            src='https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg'
            alt='Image 1'
          />
        </div>
      </div>
      <div className='section-images'>
        <div className='section-card'>
          <img
            src='https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg'
            alt='Image 2'
          />
          <div className='card-description'>
            <h3>Product Name</h3>
            <p>Brand Description goes here.</p>
            <p>Price: $X.XX</p>
          </div>
        </div>
        <div className='section-card'>
          <img
            src='https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg'
            alt='Image 3'
          />
          <div className='card-description'>
            <h3>Product Name</h3>
            <p>Brand Description goes here.</p>
            <p>Price: $X.XX</p>
          </div>
        </div>
        <div className='section-card'>
          <img
            src='https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg'
            alt='Image 4'
          />
          <div className='card-description'>
            <h3>Product Name</h3>
            <p>Brand Description goes here.</p>
            <p>Price: $X.XX</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
