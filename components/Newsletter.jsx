import React from 'react'

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className='newsletter'>
      <div className="newsletter-background">
        Rafeed
      </div>
      <h1>See the insights to us</h1>
      <p>Get the latest information</p>
      <form onSubmit={handleSubmit}>
        {/* <input type='email' placeholder='Input email address'></input> */}
        <button type='submit'>What is Rafeed?</button>
      </form>
    </section>
  )
}

export default Newsletter