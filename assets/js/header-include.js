// Header content embedded directly in JavaScript to avoid fetch issues
const headerHTML = `
<header class="header-bottom__transparent z-index-6 tp-header-height">
   <!-- header top area -->
   <div class="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation">
      <div class="container">
         <div class="row align-items-start">
            <div class="col-12">
               <div class="header-top__link text-center">
                  <span>Start free with Kikimora community today!</span>
                  <a href="#">
                     <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.40918 9L5.591 5L1.40918 1" stroke="white" stroke-width="1.5"
                           stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>

   <!-- header bottom -->
   <div id="header-sticky" class="header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6">
               <div class="header-bottom__logo">
                  <a href="index.html"><img src="kikimora/assets/img/logo/color_and_black.png" alt=""></a>
               </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
               <div class="header-bottom__main-menu text-center">
                  <nav id="main-menu">
                     <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>
                           <a href="index.html">Products</a>
                           <ul class="submenu">
                              <li><a href="Managed-Security.html">Try Kikimora</a></li>
                              <li><a href="Managed-Security.html">Managed Security</a></li>
                              <li><a href="Managed-Security.html">MSSP</a></li>
                              <li><a href="index.html">Security Bundle</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="#">Uses</a>
                           <ul class="submenu">
                              <li><a href="startup.html">Startup</a></li>
                              <li><a href="healthcare.html">Healthcare</a></li>
                              <li><a href="fintech.html">Fintech</a></li>
                              <li><a href="sme.html">SME</a></li>
                              <li><a href="ot-security.html">OT Security</a></li>
                           </ul>
                        </li>
                        <li><a href="pricing-info.html">Pricing</a></li>
                        <li>
                           <a href="project-details.html">About</a>
                           <ul class="submenu">
                              <li><a href="index.html">About</a></li>
                              <li><a href="index.html">Developers</a></li>
                              <li><a href="index.html">Careers</a></li>
                              <li><a href="index.html">Press Kit</a></li>
                           </ul>
                        </li>
                        <li><a href="index.html">Contact</a></li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
               <div class="header-bottom__right d-flex align-items-center justify-content-end">
                  <div class="header-bottom__btn d-flex align-items-center">
                     <a class="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block" href="service-details.html">
                        <span class="white-text">Book Demo</span>
                        <b></b>
                     </a>
                     <a class="header-bottom__bar d-lg-none tp-menu-bar" href="javascript:void(0)"><i class="fal fa-bars"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</header>
`;

// Simple header include function
function includeHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) {
        console.error('Header placeholder not found');
        return;
    }
    
    // Replace placeholder with actual header
    headerPlaceholder.outerHTML = headerHTML;
    console.log('Header loaded successfully');
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', includeHeader);
