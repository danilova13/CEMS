import { useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const RequireAuth = ({ allowedRoles }) => {
	// server returns auth 
	const { auth } = useAuth();
	const location = useLocation();
  const loggedUser = localStorage.getItem("userName");

	return (
		//roles is an array and allowedRoles is an array that is passed into this component
		//checks if the allowedRoles array has the role that is being passed unitl it finds one 
		
		// allowedRoles?.includes(auth?.role)
		loggedUser
			? <Outlet />
			: auth?.role
				? <Navigate to="/unauthorized" state={{ from: location }} replace />
				: <Navigate to="/login" state={{ from: location }} replace />
	);
}
 
export default RequireAuth;