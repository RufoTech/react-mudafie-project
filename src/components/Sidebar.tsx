import React from 'react'
export const Sidebar:React.FC = () => {
  return (
    <div className="sidebar ">
        <div className="mobile-links">
        <ul className='py-5 my-4'>
                
                <img src="/assets/images/header/logo-light.webp" alt=""  className='sidebar-logo'/>
                <p className='text-light py-4'>By aiming to take the life quality to an upper level with the whole realized Projects, Homepark continues to be the address of luxury.</p>
              
              <div className="company">
                <div className="row">
                    <div className="shirket1 col-12 col-md-4"><img src="/assets/images/sidebar-build/bina1.jpg" alt=""  className='shirket'/></div>
                    <div className="shirket1 col-12 col-md-4"><img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='shirket' /></div>
                    <div className="shirket1 col-12 col-md-4"><img src="/assets/images/sidebar-build/bina1.jpg" alt="" className='shirket' /></div>
                    <p  className='text-light py-3'>Kyiv | G. Stalingrada Avenue, 6 Vilnius | Antakalnio St. 17</p>
                    <h4 className='text-light'>+380(98)298-59-73</h4>
                    <p className='text-light'>hello@homepark.com.ua</p>

                </div>
            </div>
           
            </ul>
        </div>
            
        </div>
  )
}
