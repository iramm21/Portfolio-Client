import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './Layout/Nav';

const App = () => {
  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal scroll */}
      <header>
        <Nav />
      </header>
      <div className="min-h-screen bg-gray-100 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
