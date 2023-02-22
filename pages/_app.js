// import Nav from '../components/Navbar'
import '../global.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
export default function MyApp({ Component, pageProps }) {

  return<>
 <IndexNavbar fixed />
  {/* <Nav></Nav> */}
  <Component {...pageProps} />
  </>
}
