import React from 'react'
import { GrHome, GrCar, GrTools, GrProductHunt } from 'react-icons/gr'

const styles = {
  row: {
    
    display: 'flex',
    flexWrap: 'wrap', // Allow items to wrap to the next row
    justifyContent: 'space-between',
    margin: '30px',
  
  },
  column: {
    flex: '0 0 calc(33.333% - 20px)',
    marginRight: '20px',
    marginBottom: '20px', // Add margin to separate columns vertically
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  serviceImg: {
    marginBottom: '10px',
    textAlign: 'center', // Center the icon within the column
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center', // Center the heading text
  },
  shortDesc: {
    fontSize: '14px',
    color: '#777',
    textAlign: 'center', // Center the description text
  },
}

const Service = () => {
  return (
    <div className='row' style={styles.row}>
      <div className='column' style={styles.column}>
        <div className='service-img' style={styles.serviceImg}>
          <GrCar size={20} />
        </div>
        <div className='service-content'>
          <h3 className='heading' style={styles.heading}>
            Free Ground Shipping
          </h3>
          <p className='short-desc' style={styles.shortDesc}>
            For orders above $200 only for US and Canada
          </p>
        </div>
      </div>
      <div className='column' style={styles.column}>
        <div className='service-img' style={styles.serviceImg}>
          <GrProductHunt />
        </div>
        <div className='service-content'>
          <h3 className='heading' style={styles.heading}>
            Quality Products
          </h3>
          <p className='short-desc' style={styles.shortDesc}>
            We ensure our product quality all times
          </p>
        </div>
      </div>
      <div className='column' style={styles.column}>
        <div className='service-img' style={styles.serviceImg}>
          <GrHome size={20} />
        </div>
        <div className='service-content'>
          <h3 className='heading' style={styles.heading}>
            30 Day Return
          </h3>
          <p className='short-desc' style={styles.shortDesc}>
            Easy and simple product returns within 30 days of purchase
          </p>
        </div>
      </div>
    </div>
  )
}

export default Service
