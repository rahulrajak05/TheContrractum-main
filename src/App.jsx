import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Getintouch from './pages/Contact/Getintouch';
import RequestQuote from './pages/Contact/Requestaquote';
import Support from './pages/Contact/Support';
import FeedbackModal from './pages/Contact/FeedbackModal';
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/getintouch" element={<Getintouch />} />
            <Route path="/requestquote" element={<RequestQuote />} />
            <Route path="/support" element={<Support />} />
            <Route path="/feedback" element={<FeedbackModal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
