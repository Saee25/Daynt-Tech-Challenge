import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { login } from '../../services/auth.service';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(email, password);
      authLogin(data);
      navigate('/dashboard');
      toast.success('Login successful!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Paper className="p-8 w-full max-w-md">
        <Typography variant="h4" className="text-center mb-6">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </Button>

          <Button
            fullWidth
            onClick={() => navigate('/register')}
          >
            New to our site? Register now!
          </Button>

        </form>
      </Paper>
    </div>
  );
};

export default Login;