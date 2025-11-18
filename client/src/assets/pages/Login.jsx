import { useState } from "react";
import "../../Login.css";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function Login() {
    const [email, setEmail] = useState("");
    let [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3000/api/user/login', {
            email,
            password,
          });
    
          const userData = response.data;
          login(userData);
          console.log('Login successful!', userData);
          setMessage("");
          navigate("/Professor");
          
        } catch (err) {
          const errorMessage = err.response?.data?.message || 'Login failed. Please try again.';
          console.log(err);
          setMessage("Incorrect credentials");
        }
      };

     
    return (
        <div className="login-container">
          <NavBar />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {message == "" ? (null)
                :(<h3 className="m-auto p-3 bg-red-600 text-white rounded-md font-bold">{message}</h3>)}
                
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                </div>
                <button type="submit">Login</button>
            </form>
            <Footer />
        </div>
    );
}
