import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from 'components/HomePage/HomePage';
import AppBar from 'components/AppBar/AppBar';
import Register from 'components/Register/Register';
import UserName from 'components/UserName/UserName';
import Title from 'components/Title/Title';

import s from './App.module.scss';
import ContactsPage from 'components/ContactsPage/ContactsPage';

function App() {
  return (
    <div className={s.container}>
      <AppBar />
      <Title title={'Welcome'} />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<UserName />} />
        </Route>
        <Route path="contacts" element={<ContactsPage />} />
      </Routes>

      <ToastContainer
        position={'top-right'}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'dark'}
      />
    </div>
  );
}

export default App;
