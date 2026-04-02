import React from "react";
import Header from "../layout/Header";
import {Route, Routes } from 'react-router-dom';
import CreateTeam from '../team/CreateTeam';
import UserList from "../team/UserList";
import Counter from "../Counter";
import GoodBye from "../GoodBye";
import Hello from "../Hello";
import Register from "../Register";

const Routing=()=>{
    return(
        <div>
         <Header />
        <Routes>
          <Route path="/create" element={<CreateTeam />} />
          <Route path="/show" element={<UserList />}/>
          <Route path="/count" element={<Counter />} />
          <Route path="/" element={<Hello />}/>
          <Route path="/goodbye" element={<GoodBye/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </div>
    );
}
export default Routing;