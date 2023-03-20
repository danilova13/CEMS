import './App.css';
import Appbar from './components/Appbar';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Homepage from './pages/Homepage';
import Manager from './pages/Manager';
import Missing from './pages/Missing';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import Unauthorized from './pages/Unauthorized';
import Club from './pages/Club';

const ROLES = {

  'Student': 'student',
  'Admin': 'admin',
  'Manager': 'manager'

}

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Routes>
        <Route path="/" element={<Layout />}> 
          {/* public routes*/}
          <Route path="/login" element={ <Login/>} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes*/}

          {/* USER CODES ARE RECEIVED FROM THE SERVER */}
          {/* 1 is the student role - can go to the homepage 
          everyone can go to the homepage -> other roles are included in the access*/}
          {/* can put more than one paths in these protected routes
          - add clubs page */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Student, ROLES.Manager, ROLES.Admin]}/> }>
            {/* paths that are allowable to this user */}
            <Route path="/" element={ <Homepage/>} />
            <Route path="/club" element={ <Club/>} />
          </Route>

        {/* 2 is the admin role - will go to the admin page */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/> }>
            <Route path="/admin" element={ <Admin/>} />   
          </Route>
          
          {/* 3 is the manager role - will go to the manager's page */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Manager]}/> }>
            <Route path="/manager" element={ <Manager/>} />   
          </Route>
          
          {/*  catch all */}
          <Route path="*" element={<Missing />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
 