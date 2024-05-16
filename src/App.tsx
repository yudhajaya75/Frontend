import { Routes, Route, Navigate } from "react-router-dom";
import useGetUserData from "./hooks/useGetUserData";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Daftar from "./pages/signup/signup";
<<<<<<< HEAD
import Layanan from "./pages/layanan/layanan";
import Webinar from "./pages/webminar/webinar";
import Webinar2 from "./pages/webminar/webinarWa";
import Pelatihan from "./pages/pelatihan/pelatihan";
import Konsultasi from "./pages/konsultasi/konsultasi";
import Blog from "./pages/blog/blog";
import Blog2 from "./pages/blog/beritabaru";
import BlogPopulate from "./pages/blog/beritapopulate";
=======
import Webinar from "./pages/webminar/webinar";
import Pelatihan from "./pages/pelatihan/pelatihan";
import Konsultasi from "./pages/konsultasi/konsultasi";
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e
import About from "./pages/about/about";
import Payment from "./pages/payment/payment";
import Profile from "./pages/profile/profile";
import Contactus from "./pages/contactus/contactus";
import Paket from "./pages/paket/paket";
<<<<<<< HEAD
import WebinarDetail from "./pages/webminar/WebinarDetail";
import BlogDetail from "./pages/blog/BlogDetail";
=======
import Logout from "./pages/profile/Logout";
import Product from "./pages/detail/Product";
import ArticlePage from "./pages/article/Article";
import ArticleDetail from "./pages/article/ArticleDetail";
import Filtered from "./pages/article/Filtered";
import ComingSoon from "./pages/misc/ComingSoon";
import Konseling from "./pages/konseling/konseling";
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e

function App() {
  const { email, setEmail, isLoggedIn } = useGetUserData();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home email={email} />} />
        <Route path="/login" Component={() => <Login setEmail={setEmail} />} />
        <Route path="/signup" element={<Daftar />} />
        <Route path="/home" element={<Home email={email} />} />
<<<<<<< HEAD
        <Route path="/layanan" element={<Layanan email={email} />} />
        <Route path="/webinar" element={<Webinar email={email} />} />
        <Route path="/webinar/:id" element={<Webinar2 email={email} />} />
        <Route path="/blog/:slug" element={<BlogDetail email={email} />} />
        <Route
          path="/webinardetail/:id"
          element={<WebinarDetail email={email} />}
        />
        <Route path="/pelatihan" element={<Pelatihan email={email} />} />
        <Route path="/konsultasi" element={<Konsultasi email={email} />} />
        <Route path="/blog" element={<Blog email={email} />} />
        <Route path="/beritabaru" element={<Blog2 email={email} />} />
        <Route
          path="/beritapopulate"
          element={<BlogPopulate email={email} />}
        />
        <Route path="/about" element={<About email={email} />} />
        <Route
=======
        <Route path="/konseling" element={<Konseling email={email} />} />
        <Route path="/webinar" element={<Webinar email={email} />} />
        <Route path="/pelatihan" element={<Pelatihan email={email} />} />
        <Route path="/konsultasi" element={<Konsultasi email={email} />} />
        <Route path="/about" element={<About email={email} />} />
        <Route
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e
          path="/payment"
          element={
            isLoggedIn ? <Payment email={email} /> : <Navigate to="/login" />
          }
        />
        <Route path="/profile" element={<Profile email={email} />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/konseling" element={<Konseling email={email} />} />
        <Route path="/article/popular" element={<Filtered type="Popular" />} />
        <Route path="/article/newest" element={<Filtered type="Newest" />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
        <Route path="/pelatihan/:slug" element={<Product type="Pelatihan" />} />
        <Route path="/konseling/:slug" element={<Product type="Konseling" />} />
        <Route
<<<<<<< HEAD
          path="/profile"
          element={
            isLoggedIn ? <Profile email={email} /> : <Navigate to="/home" />
          }
        />
        <Route path="/contact" element={<Contactus email={email} />} />
        <Route path="/paket" element={<Paket email={email} />} />
=======
          path="/konsultasi/:slug"
          element={<Product type="Konsultasi" />}
        />
        <Route path="/webinar/:slug" element={<Product type="Webinar" />} />
        <Route path="/contact" element={<Contactus email={email} />} />
        <Route path="/paket" element={<Paket email={email} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
>>>>>>> de797207b16d27cfe93b5f586117095663289e4e
      </Routes>
    </>
  );
}

export default App;