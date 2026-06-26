import {
  useEffect,
  useState,
} from "react";
import { AuthContext } from "./auth-context";
import api from "../services/api";
import {
  login as loginRequest,
  register as registerRequest,
} from "../services/authService";

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("inventra_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() =>
    localStorage.getItem("inventra_token")
  );
  const [loading, setLoading] = useState(true);

  const saveSession = (authData) => {
    localStorage.setItem("inventra_token", authData.token);
    localStorage.setItem("inventra_user", JSON.stringify(authData.user));
    setToken(authData.token);
    setUser(authData.user);
  };

  const login = async (credentials) => {
    const response = await loginRequest(credentials);
    saveSession(response.data);
    return response;
  };

  const register = async (data) => {
    const response = await registerRequest(data);
    saveSession(response.data);
    return response;
  };

  const logout = () => {
    localStorage.removeItem("inventra_token");
    localStorage.removeItem("inventra_user");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const restoreSession = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/auth/me");
        const restoredUser = response.data.data.user;
        localStorage.setItem("inventra_user", JSON.stringify(restoredUser));
        setUser(restoredUser);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(token && user),
        loading,
        login,
        logout,
        register,
        token,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
