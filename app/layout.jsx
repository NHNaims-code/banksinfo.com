import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";

export default function RootLayout({ children }) {

  const menus = [
    {
      label: "Banks Info",
      link: "/upcoming"
    },
    {
      label: "Routing Number",
      link: "/upcoming"
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

        {children}

        {/* Option 1: Bootstrap Bundle with Popper */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

        {/* Adsense Script */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-987************676"
          crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
