import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
	const ctx = useContext(AuthContext);
	return ctx;
}
 
export default useAuth;