import React, { useState } from 'react'
import Image from 'next/image'
import {CiSearch} from 'react-icons/ci'
import {CgShoppingCart} from 'react-icons/cg'
import logo from '../src/assets/Logo.png'
import logo2 from  '../src/assets/download.png'
import company  from '../src/assets/company.jpg'
import Link from 'next/link'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useStateContext } from '../context/StateContext';

const Navbar = ({Searchproducts}) => {
  const {showCart, setShowCart, totalQty} = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('')
     const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false) // Add state for the Brands dropdown

     const toggleBrandsDropdown = () => {
       setBrandsDropdownOpen(!brandsDropdownOpen)
     }
  return (
    <nav>
      <Link href='/'>
        <Image src={company} width={100} height={90} alt='Rafeed logo' />
      </Link>
      <ul className='nav-links'>
        <Link href='/'>
          <li>Home</li>
        </Link>
        {/* <Link href='/female'>
          <li>Female</li>
        </Link> */}
        <Link href='/brand'>
          <li>Brands</li>
        </Link>
        {/* <Link href='/male'>
          <li>Male</li>
        </Link> */}
        <Link href='/products'>
          <li>All Products</li>
        </Link>
        {/* <Link href='/kids'>
          <li>Kids</li>
        </Link> */}
        <Link href='/about'>
          <li>About Us</li>
        </Link>
        <Link href='/project'>
          <li>Projects </li>
        </Link>
      </ul>

      <div className='search-bar'>
        <CiSearch />
        <input type='text' placeholder='What you looking for' />
      </div>
      {/* onChange={(event) => {
              setSearchTerm(event.target.value);
          }} */}

      {showCart ? (
        <Link href='/cart'>
          <button className='cart' onClick={() => setShowCart(false)}>
            <CgShoppingCart size={22} />
            <span className='cart-item-qty'>{totalQty}</span>
          </button>
        </Link>
      ) : (
        <button className='cart' onClick={() => setShowCart(true)}>
          <CgShoppingCart size={22} />
          <span className='cart-item-qty'>{totalQty}</span>
        </button>
      )}

      <div className='navbar-smallscreen'>
        <RiMenu3Line
          color='black'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='navbar-smallscreen_overlay'>
            <Link href='/'>
             
              <Image
                src={company}
                className='logo-small'
                width={100}
                height={90}
                alt='Rafeed logo'
              />
            </Link>
            <RiCloseLine
              color='black'
              fontSize={27}
              className='close_icon'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='navbar-smallscreen_links'>
              <Link href='/cart'>
                <button
                  className='cart-small-screen'
                  onClick={() => setShowCart(false)}
                >
                  <CgShoppingCart size={22} />
                  <span className='cart-item-qty'>{totalQty}</span>
                </button>
              </Link>
              <Link href='/'>
                <li>Home</li>
              </Link>

              {/* <Link href='/'>
                <li>Female</li>
              </Link>
              <Link href='/'>
                <li>Male</li>
              </Link> */}
              {/* <Link href='/'>
                <li>Kids</li>
              </Link> */}
              {/* <Link href='/'>
                <li>All Products</li>
              </Link>
              <Link href='/projects'>
                <li>Projects </li>
              </Link> */}
              <Link href='/'>
                <li>Home</li>
              </Link>
              {/* <Link href='/female'>
          <li>Female</li>
        </Link> */}
              <Link href='/brand'>
                <li>Brands</li>
              </Link>
              {/* <Link href='/male'>
          <li>Male</li>
        </Link> */}
              <Link href='/products'>
                <li>All Products</li>
              </Link>
              {/* <Link href='/kids'>
          <li>Kids</li>
        </Link> */}
              <Link href='/about'>
                <li>About Us</li>
              </Link>
              <Link href='/project'>
                <li>Projects </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar