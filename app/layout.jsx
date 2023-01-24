import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";
import { HeadingTwo } from '@/components/headings';

export default function RootLayout({ children }) {

  const menus = [
    {
      label: "Banks Info",
      link: "/"
    },
    {
      label: "Routing Number",
      link: "/routing-number-lookup"
    },
    {
      label: "SWIFT Code",
      link: "/upcoming"
    },
    {
      label: "Insurance",
      link: "/upcoming"
    },
    {
      label: "Business News",
      link: "/upcoming"
    },
    {
      label: "Blog",
      link: "/upcoming"
    },
    {
      label: "Banks Holiday",
      link: "/upcoming"
    },
  ]

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}      
      <head />
      <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="/banks-info-us.png" alt="" width="auto" height="auto" class="d-inline-block align-text-top"/>              
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 position-relative">
              {
                ( menus || [] ).map((menu, key) => (
                  <li className="nav-item mx-2" key={key}>
                    <Link href={menu.link} className="nav-link active" aria-current="page">{menu.label}</Link>
                  </li>
                ))
              } 
              <li className='nav-item position-relative'>
                {/* <form className=' position-absolute right-0'>
                  <input type="text" className="py-1 px-2 border" placeholder='Search'/>
                </form> */}
                <label htmlFor='search' className=''>
                  <span role="button" className='nav-link'><IoSearchOutline className='text-gc-0'/></span>
                </label>
                <input type="checkbox" className="d-none" id="search"/>
              </li>             
            </ul>
            
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>

      <footer className='bg-gc-1 pt-4'>
        <div className="container">
          <div className="d-lg-flex justify-content-between">
            <div className="">
              <h2>Banks Info</h2>
              <ul>
                <li><a href="https://banksinfo.us/">Bank Info</a></li>
                <li><a href="https://banksinfo.us/category/definition/">Definition</a></li>
                <li><a href="https://banksinfo.us/category/tips/">Tips and Tricks</a></li>
                <li><a href="https://banksinfo.us/routing-number-lookup/">Routing Number</a></li>
                <li><a href="https://banksinfo.us/swift-code-lookup/">Swift Code</a></li>
                <li>Bank Accounts</li>
              </ul>
            </div>
            <div className="mt-5 mt-lg-0">
              <h2>Banks Info Blog</h2>
              <ul>
                <li><a href="https://banksinfo.us/blog/bank-info/">Bank Information</a></li>
                <li><a href="https://banksinfo.us/blog/reviews/">USA Bank Reviews</a></li>
                <li><a href="https://banksinfo.us/blog/insurance/">Insurance Info</a></li>
                <li><a href="https://banksinfo.us/blog/business-news/">Business News</a></li>
                <li><a href="https://banksinfo.us/blog/bank-holiday/">Bank Holidays</a></li>
              </ul>
            </div>
            <div className="mt-5 mt-lg-0">
              <h2>US Holidays</h2>
              <ul>
                <li><a href="https://banksinfo.us/holiday/bank/" target="_blank" rel="noopener">Bank Holidays</a></li>
                <li><a href="https://banksinfo.us/holiday/federal/" target="_blank" rel="noopener">Federal Holidays</a></li>
                <li><a href="https://banksinfo.us/holiday/us-business-holidays/" target="_blank" rel="noopener">Business Holidays</a></li>
                <li><a href="https://banksinfo.us/holiday/public/" target="_blank" rel="noopener">Public Holidays</a></li>
                <li><a href="https://banksinfo.us/holiday/national/" target="_blank" rel="noopener">National Holidays</a></li>
                <li><a href="https://banksinfo.us/holiday/school/" target="_blank" rel="noopener">School Holidays</a></li>
                <li><a href="https://banksinfo.us/holiday/working-hours/" target="_blank" rel="noopener">Working Hours</a></li>
              </ul>
            </div>
            <div className="mt-5 mt-lg-0">
              <h2>Write to us</h2>
              <ul>
                <li><a href="https://banksinfo.us/blog/submission-terms/">Writing Instruction</a></li>
                <li><a href="https://banksinfo.us/blog/submit/">Business News</a></li>
                <li><a href="https://banksinfo.us/blog/submit/">Your Success Stories</a></li>
                <li><a href="https://banksinfo.us/blog/submit/">Bank Reviews</a></li>
                <li><a href="https://banksinfo.us/blog/submit/">About Insurance</a></li>
                <li><a href="https://banksinfo.us/blog/my-article/">See Your Article</a></li>
              </ul>
            </div>
            <div className="mt-5 mt-lg-0">
              <h2><strong>Follow us</strong></h2>
              <ul>
                <li><a href="https://banksinfo.us/blog/submission-terms/">Writing Instruction</a></li>
                <li><a href="https://banksinfo.us/blog/submit/">Business News</a></li>
                <li><a href="https://banksinfo.us/blog/submit/">Your Success Stories</a></li>
                <li><a href="https://banksinfo.us/blog/submit/">Bank Reviews</a></li>
                <li><a href="https://banksinfo.us/blog/submit/">About Insurance</a></li>
                <li><a href="https://banksinfo.us/blog/my-article/">See Your Article</a></li>
              </ul>
            </div>
      
          </div>
        </div>
        <div style={{height: '1px', background: '#DDDDDD'}} />
        <div className="container d-lg-flex justify-content-between my-3">
          <div className='text-white'>
            Copyright © 2023 <strong><a className='text-white' href="https://banksinfo.us/" target="_blank">Banks Info</a></strong> । <strong><a className='text-white' href="https://banksinfo.us/blog/" target="_blank"> Blog</a></strong> । <strong><a className='text-white' href="https://banksinfo.us/holiday/" target="_blank"> Holiday Shopping</a></strong>
          </div>
          <div className='text-white'>
              <a href="https://banksinfo.us/about-us/" target="_blank">About us</a> । <a href="https://banksinfo.us/faq/" target="_blank">FAQ</a> । <a href="https://banksinfo.us/privacy-policy/" target="_blank">Privacy Policy</a> । <a href="https://banksinfo.us/terms-and-condition/" target="_blank">T&amp;C</a> । <a href="https://banksinfo.us/blog/complain/" target="_blank">Complain</a> । <a href="https://banksinfo.us/blog/contact/" target="_blank">Contact us</a>
          </div>
        </div>
        <div className="bg-gc-0" style={{height: '27px'}}></div>
      </footer>

        {/* Option 1: Bootstrap Bundle with Popper */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

      </body>
    </html>
  )
}
