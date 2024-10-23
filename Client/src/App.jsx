import { Outlet } from 'react-router-dom';
import { Footers, Navbar } from './Components/1index.js';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footers />
    </>
  );
}

export default App;
