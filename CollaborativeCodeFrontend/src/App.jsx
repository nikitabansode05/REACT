import Header from "./components/layout/Header";
import {Route, Routes } from 'react-router-dom';
import CreateTeam from './components/CreateTeam';
import UserList from "./components/UserList";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/create" element={<CreateTeam />} />
          <Route path="/show" element={<UserList />}/>
          <Route path="/count" element={<Counter />} />
        </Routes>
    </div>
  );
}