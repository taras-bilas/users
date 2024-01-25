import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { UserList } from './components/UserList/UserList';
import { UserInfo } from './components/UserInfo/UserInfo';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/details" element={<UserInfo />} />
    </Routes>
  );
}