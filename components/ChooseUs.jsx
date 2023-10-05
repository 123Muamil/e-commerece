import React, { useState } from 'react'

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '24px',
    lineHeight: '30px',
    color: '#333',
    fontWeight: 'bold',
    margin: '20px 0', // Add margin between section titles
  },
  textSecondary: {
    color: '#777',
    fontSize: '16px',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 0', // Add padding between section content
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px', // Add margin above the button
  },
}

const ChooseUs = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.sectionTitle}>We turn what you think into reality</h1>
      </div>
      <div style={styles.content}>
        <p style={styles.textSecondary}>
          In a few years time, MYGA will be a leading global company through
          delivering perfect products and expert guidance to customers, so they
          can make the appropriate choices for lighting technologies. We look
          forward for more green technology, that protects the environment and
          save huge amounts of money for the clients.
        </p>
      </div>
      <div style={styles.content} className={isExpanded ? '' : 'hidden'}>
        <div>
          <h3 style={styles.sectionTitle}>
            Instruments used in General Surgery
          </h3>
        </div>
        <p style={styles.textSecondary}>
          We offer a wide range of surgical instruments with multiple sizes,
          patterns, and variations. Our commonly used instruments are:
        </p>
        <ul style={styles.textSecondary}>
          <li>Surgical Scissors</li>
          <li>Surgical Retractors</li>
        </ul>
      </div>
      <div style={styles.content} className={isExpanded ? '' : 'hidden'}>
        <p style={styles.textSecondary}>
          Rafeed provides the best and newest technology in LED lighting, and
          consultancy services with the application process for all Rafeed
          products, creativity and honesty lead to unique wide-range products
          and give freedom of choice for the client. We are proud to have
          pioneered the application of LED technology in industry. Our expertise
          has grown from there - today we offer next-generation lighting
          solutions and other visual products using LED's. As scientists believe
          that LED lighting has the potential to reduce lighting energy use in
          the world by one-fourth. With the promise of being more than ten times
          as efficient as incandescent lighting, light-emitting diodes (LEDs)
          will change the way we light our homes and business. We believe LED
          lighting has the potential to revolutionize the lighting market
          through the introduction of highly energy-efficient, longer lasting,
          versatile light sources.
        </p>
      </div>
      <div style={styles.content} className={isExpanded ? '' : 'hidden'}>
        <div>
          <h3 style={styles.sectionTitle}>Why Choose Us?</h3>
        </div>
        <p style={styles.textSecondary}>
          Our Surgical instruments accommodate healthcare professionals in
          various medical approaches. Selecting the right instrument is
          important for delivering quality health care to your patients. We
          pride ourselves in manufacturing the latest instruments that make any
          surgery quick and smooth. Our instruments are not only used for
          surgeries but useful for research laboratories and organizations for
          educational purposes. We provide you reliable instruments at a
          cost-effective price. Our craftsmen maintain strict quality and
          consistency inspection patterns to ensure the quality and durability
          of instruments. We also offer customization to meet your personal
          surgical need.
        </p>
      </div>
      <div>
        <button type='button' style={styles.button} onClick={toggleExpansion}>
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      </div>
    </div>
  )
}

export default ChooseUs
