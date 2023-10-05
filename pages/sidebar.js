// Sidebar.jsx
import React, { useState } from 'react'


const Sidebar = () => {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 100])

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen)
  }

  const toggleFilter = () => {
    setFilterOpen(!filterOpen)
  }

  const handlePriceRangeChange = (e) => {
    const minValue = parseFloat(e.target.value[0])
    const maxValue = parseFloat(e.target.value[1])
    setPriceRange([minValue, maxValue])
  }

  return (
    <div className='sidebar'>
      <div className='category-title' onClick={toggleCategory}>
        <span className='category-text'>Category</span>
        <span className={`arrow ${categoryOpen ? 'open' : ''}`}></span>
      </div>
      {categoryOpen && (
        <div className='category-options'>
          {/* Add your category options here */}
          <div>Category Option 1</div>
          <div>Category Option 2</div>
          {/* ... */}
        </div>
      )}
      <div className='filter-title' onClick={toggleFilter}>
        <span className='filter-text'>Filter By</span>
        <span className={`arrow ${filterOpen ? 'open' : ''}`}></span>
      </div>
      {filterOpen && (
        <div className='filter-options'>
          {/* Add your filter options here */}
          <div>Filter Option 1</div>
          <div>Filter Option 2</div>
          {/* ... */}
        </div>
      )}
      <div className='price-range'>
        <input
          type='range'
          min='0'
          max='100'
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
        <div className='price-display'>
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
