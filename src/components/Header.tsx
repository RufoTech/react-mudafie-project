
import { CiMenuBurger } from "react-icons/ci";


const Header:React.FC = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg bg-warning ">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="/assets/images/header/logo-light.webp" alt="" className='header-logo w-100'/></a>
        
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center ">
             <div className='contacts d-flex  '> 
               <div className="contact-menu align-items-center justify-content-center px-2">
               <a className=" contact text-light  " aria-current="page" href="#" ><span><h5 className='roboto-bold number'>+380(98)298-59-73</h5> </span></a>
               <a href='' className='mb-0 email   '><h6>alakbarlirufo@gmail.com</h6></a>
               
               </div>
               <a href=""><img src="/assets/images/header/icon-phone.png" alt=""  className='logo-icon  '/></a>
           <div className="language d-flex align-items-center justify-content-center">
           <li className="nav-item">
              <a className="nav-link text-light roboto-bold  " href="#" ><h5>EN</h5></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light roboto-bold " href="#"><h5>UA</h5></a>
             
            </li>
            <button className="fabars text-light  d-flex align-items-center justify-content-center px-4 ">
         <CiMenuBurger />
          </button>
              
           </div>
        
             </div>
           
              
              
              
            </li>
          
            
            
          </ul>
        
        </div>
      </div>
    </nav>
   </>
  )
}

export default Header