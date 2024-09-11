import React from 'react'

const Footer = () => {
  return (
    <>
      {/* start footer */}
      <footer
     className="footer-dark bg-dark-blue pb-0 cover-background background-position-left-top"
     style={{
       backgroundImage: 'url("images/demo-hosting-footer-bg.jpg")',
     }}
   >
     <div className="container">
       <div className="row justify-content-center mb-5 md-mb-8 sm-mb-40px">
         {/* start footer column */}
         <div className=" col-lg-4 last-paragraph-no-margin order-sm-1 md-mb-40px xs-mb-30px">
           <a
             href="/"
             className="footer-logo mb-15px d-inline-block"
           >
             <img
               src="images/logo/saprise-white.png"
               data-at2x="images/logo/saprise-white@2x.png"
               alt=""
             />
           </a>
           <p className="w-90 lg-w-100">
           Our Cloud Management Services ensure top-tier infrastructure, performance, and support.
           </p>
           <div className="elements-social social-icon-style-02 mt-20px xs-mt-15px">
             <ul className="small-icon light">
               <li className="my-0">
                 <a
                   className="facebook"
                   href="https://www.facebook.com/"
                   target="_blank"
                 >
                   <i className="fa-brands fa-facebook-f" />
                 </a>
               </li>
               <li className="my-0">
                 <a
                   className="linkedin"
                   href="https://www.linkedin.com/"
                   target="_blank"
                 >
                   <i className="fa-brands fa-linkedin-in" />
                 </a>
               </li>
               <li className="my-0">
                 <a
                   className="twitter"
                   href="http://www.twitter.com"
                   target="_blank"
                 >
                   <i className="fa-brands fa-twitter" />
                 </a>
               </li>
               <li className="my-0">
                 <a
                   className="instagram"
                   href="http://www.instagram.com"
                   target="_blank"
                 >
                   <i className="fa-brands fa-instagram" />
                 </a>
               </li>
             </ul>
           </div>
         </div>
         {/* end footer column */}
         {/* start footer column */}
         <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-3 order-lg-2">
           <span className="fs-17 fw-500 d-block text-white mb-5px">
             Company
           </span>
           <ul>
             <li>
               <a href="/">Home</a>
             </li>
             <li>
               <a href="/about">About</a>
             </li>
             <li>
               <a href="/services">Services</a>
             </li>
           </ul>
         </div>
         {/* end footer column */}
         {/* start footer column */}
         <div className="col-6 col-lg-2 col-sm-4 xs-mb-30px order-sm-4 order-lg-3">
           <span className="fs-17 fw-500 d-block text-white mb-5px">
             Customer
           </span>
           <ul>
             <li>
               <a href="/support">Client support</a>
             </li>
             <li>
               <a href="/contact">Help center</a>
             </li>
           </ul>
         </div>
         {/* end footer column */}
         {/* start footer column */}
         <div className=" col-lg-3 col-sm-4 xs-mb-30px order-sm-5 order-lg-4">
           <span className="fs-17 fw-500 d-block text-white mb-5px">
             Lets Connect
           </span>

           <a
             href="mailto:info@sapriseconsultancy.com"
             className="text-white lh-22  d-inline-block mb-10px"
           >
             info@sapriseconsultancy.com
           </a>
           <a
             href="mailto:sales@sapriseconsultancy.com"
             className="text-white lh-22  d-inline-block mb-20px"
           >
            sales@sapriseconsultancy.com
           </a>
           <span className="d-inline-flex w-100">Address</span>
           <div

             className="text-white lh-22 d-inline-flex"
           >
            73 Central Ave, Albany NY 12206 USA
           </div>
         </div>
       </div>
       <div className="border-top border-color-transparent-white-light pt-35px pb-35px text-center">
         <span className="fs-13 w-60 lg-w-70 md-w-100 d-block mx-auto lh-22">
         ©2023-24 - Saprise Consultancy  |   All Rights Reserved
         </span>
       </div>
     </div>
   </footer>
   {/* end footer */}
    </>
   
  )
}

export default Footer