import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import RequirAuth from './Pages/Shared/RequirAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequirAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='appointment' element={
          <RequirAuth>
            <Appointment></Appointment>
          </RequirAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequirAuth>
            <Dashboard></Dashboard>
          </RequirAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={
            <RequirAdmin>
              <AllUsers></AllUsers>
            </RequirAdmin>
          }></Route>
          <Route path='addDoctor' element={
            <RequirAdmin>
              <AddDoctor></AddDoctor>
            </RequirAdmin>
          }></Route>
          <Route path='manageDoctor' element={
            <RequirAdmin>
              <ManageDoctors></ManageDoctors>
            </RequirAdmin>
          }></Route>
        </Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
