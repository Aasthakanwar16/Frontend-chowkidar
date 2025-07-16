import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

import PrivateRoute from './Components/PrivateRoute';

// Admin Components
import AdminLayout from './Components/Admin/AdminLayout';
import Currentparking from './Components/Admin/Currentparking';
import Complaints from './Components/Admin/Complaints';
import VehicleHistory from './Components/Admin/VehicleHistory';
import Guardsmang from './Components/Admin/Guardsmang';
import Logout from './Components/Admin/Logout';

// Guard Components
import GuardLayout from './Components/Guard/GuardLayout';
import Addentry from './Components/Guard/Addentry';
import GuardDashboard from './Components/Guard/GuardDashboard';
import ExitVehicle from './Components/Guard/ExitVehicle';
import Logoutg from './Components/Guard/Logoutg';

function App() {
  return (
    <Routes>

      {/* Public Home Route */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <About />
            <Features />
            <Contact />
            <Footer />
          </>
        }
      />

      {/* Login Route */}
      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        }
      />

      {/* Admin Protected Routes */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Currentparking />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="vehicle-history" element={<VehicleHistory />} />
        <Route path="guards" element={<Guardsmang />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      {/* Guard Protected Routes */}
      <Route
        path="/guard"
        element={
          <PrivateRoute>
            <GuardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<GuardDashboard />} />
        <Route path="dashboard" element={<GuardDashboard />} />
        <Route path="add-entry" element={<Addentry />} />
        <Route path="exit-vehicle" element={<ExitVehicle />} />
        <Route path="logout" element={<Logoutg />} />
      </Route>

    </Routes>
  );
}

export default App;
