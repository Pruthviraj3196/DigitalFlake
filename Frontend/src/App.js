import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PageWithTabs from './components/PageWithTabs';
import Roles from './components/Roles';
import AddRole from './components/Addrole';
import EditRole from './components/EditRole';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';
import Loginpage from './components/Loginpage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="body">
          <div className="vertical-component">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page-with-tabs/*" element={<PageWithTabs />} />
              <Route path="/" element={<Roles />} />
              <Route path="/addrole" element={<AddRole />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/editrole" element={<EditRole />} />
              <Route path="/adduser" element={<Adduser />} />
              <Route path="/edituser" element={<Edituser />} />
            </Routes>
          </div>
          <div className="vertical-component">
            {/* Placeholder for Vertical Component 2 */}
          </div>
          <div className="vertical-component">
            {/* Placeholder for Vertical Component 3 */}
          </div>
        </div>
      </div>
    </Router>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Roles />} />
    //     <Route path="/addrole" element={<AddRole />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
