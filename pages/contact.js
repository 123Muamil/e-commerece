import React from 'react'
import { AiFillMail, AiFillMobile, AiFillPhone, AiFillRedEnvelope, AiOutlineHeatMap, AiOutlineWhatsApp } from 'react-icons/ai'
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr'



function ContactForm() {
  return (
    <>
      <div style={{ outline: '2px solid black' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            overflowX: 'auto', // Enable horizontal scrolling
            whiteSpace: 'nowrap', // Prevent text from wrapping
            // animation: 'scroll 15s linear infinite',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '15px',
              marginRight: '15px',
              fontSize: '10px',
            }}
          >
            <AiFillMail size={15} />
            <span>MYGATRADING84@GMAIL.COM</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '15px',
              marginRight: '15px',
              fontSize: '10px',
            }}
          >
            <AiFillPhone size={15} />
            <span>00971 4 2989015</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '15px',
              marginRight: '15px',
              fontSize: '10px',
            }}
          >
            <AiFillMobile size={15} />
            <span>0097 52 8774222</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '15px',
              marginRight: '15px',
              fontSize: '10px',
            }}
          >
            <AiFillRedEnvelope size={15} />
            <span>123056</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '15px',
              marginRight: '15px',
              fontSize: '10px',
            }}
          >
            <AiOutlineHeatMap size={15} />
            <span>
              ALI BIB HAIDER WHARE HOUSES OPPOSITE RAPTORS GYM WH # 1 UMMA
              RAMOUL DUBAI
            </span>
          </div>
        </div>
      </div>

      <div class='contact_us_6'>
        <div class='responsive-container-block container'>
          <form class='form-box'>
            <div class='container-block form-wrapper'>
              <div class='mob-text'>
                <p class='text-blk contactus-head'>Get in Touch</p>
                <p class='text-blk contactus-subhead'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  diam lectus sapien.
                </p>
              </div>
              <div class='responsive-container-block' id='i2cbk'>
                <div
                  class='responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12'
                  id='i10mt-3'
                >
                  <p class='text-blk input-title'>FIRST NAME</p>
                  <input
                    class='input'
                    id='ijowk-3'
                    name='FirstName'
                    placeholder='Please enter first name...'
                  />
                </div>
                <div
                  class='responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12'
                  id='ip1yp'
                >
                  <p class='text-blk input-title'>EMAIL</p>
                  <input
                    class='input'
                    id='ipmgh-3'
                    name='Email'
                    placeholder='Please enter email...'
                  />
                </div>
                <div
                  class='responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12'
                  id='ih9wi'
                >
                  <p class='text-blk input-title'>PHONE NUMBER</p>
                  <input
                    class='input'
                    id='imgis-3'
                    name='PhoneNumber'
                    placeholder='Please enter phone number...'
                  />
                </div>
                <div
                  class='responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12'
                  id='i634i-3'
                >
                  <p class='text-blk input-title'>WHAT DO YOU HAVE IN MIND ?</p>
                  <textarea
                    class='textinput'
                    id='i5vyy-3'
                    placeholder='Please enter query...'
                  ></textarea>
                </div>
              </div>
              <button class='submit-btn' id='w-c-s-bgc_p-1-dm-id-2'>
                Submit
              </button>
            </div>
          </form>
          <div
            class='responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12'
            id='i772w'
          >
            <div class='map-part'>
              <p class='text-blk map-contactus-head' id='w-c-s-fc_p-1-dm-id'>
                Reach us at
              </p>
              <p class='text-blk map-contactus-subhead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                diam lectus sapien.
              </p>
              <div class='social-media-links mob'>
                <a class='social-icon-link' href='#' id='ix94i-2-2'>
                  <div>
                    <GrTwitter size={20} />
                  </div>
                </a>
                <a class='social-icon-link' href='#' id='itixd'>
                  <div>
                    <GrFacebookOption size={20} />
                  </div>
                </a>
                <a class='social-icon-link' href='#' id='izxvt'>
                  <div>
                    <GrLinkedinOption size={20} />
                  </div>
                </a>
                <a class='social-icon-link' href='#' id='izldf-2-2'>
                  <div>
                    <AiOutlineWhatsApp size={20} />
                  </div>
                </a>
              </div>

              {/* <div class='map-box container-block'> */}
              <a
                class='map-box container-block'
                href='https://www.google.com/maps/place/25.233652521085165,55.3756084022633'
              ></a>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
