import { useCartLoad } from './composables/useCartLoad';
import { useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/tailwind.css';
import './assets/css/style.css';

import Nav from './components/Nav';
import Error from './views/Error';
import Index from './views/Index';
import Products from './views/Products';
import Cart from './views/Cart';
import Fashion from './views/Fashion';
import Accessroy from './views/Accessory';
import Digital from './views/Digital';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import { ScrollToTop } from './helpers/helpers';

function App() {
  const $hamburger = useRef<HTMLInputElement>(null);
  useCartLoad();
  const closeOverlay = () =>{
    $hamburger?.current?.click();
  };
  return (
   <BrowserRouter>
    <ScrollToTop />
    <input type = 'checkbox' id='side-menu' className='drawer-toggle' ref={$hamburger} />
    <section className='drawer-content' >
      <Nav />
      <section className='main pt-16'>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path='/' element={<Index />} />
          <Route path='/product/:id' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/accessory' element={<Accessroy />} />
          <Route path='/digital' element={<Digital />} />
        </Routes>
      </section>
      <Footer />
    </section>
    <Drawer closeOverlay= {closeOverlay} />
   </BrowserRouter>
  )
}

export default App
