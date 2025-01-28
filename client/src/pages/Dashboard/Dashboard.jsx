import { useState, useEffect } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Container, 
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    dob: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        // Update existing user
        const updatedUsers = users.map(user => 
          user.id === editId ? { ...newUser, id: editId } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        toast.success('User updated successfully!');
        setEditMode(false);
        setEditId(null);
      } else {
        // Add new user
        const newUserWithId = { ...newUser, id: Date.now() };
        const updatedUsers = [...users, newUserWithId];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        toast.success('User created successfully!');
      }
      
      // Reset form
      setNewUser({ name: '', email: '', password: '', dob: '' });
    } catch (error) {
      toast.error(editMode ? 'Failed to update user' : 'Failed to create user');
    }
  };

  const handleEdit = (user) => {
    setNewUser({
      name: user.name,
      email: user.email,
      password: user.password,
      dob: user.dob
    });
    setEditMode(true);
    setEditId(user.id);
  };

  const handleDelete = (id) => {
    try {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      toast.success('User deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete user');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4">
            Dashboard
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            {editMode ? 'Edit User' : 'Create New User'}
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
            
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
            
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              required
            />
            
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              margin="normal"
              InputLabelProps={{ shrink: true }}
              value={newUser.dob}
              onChange={(e) => setNewUser({ ...newUser, dob: e.target.value })}
              required
            />
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              {editMode ? 'Update User' : 'Create User'}
            </Button>
            
            {editMode && (
              <Button
                variant="outlined"
                sx={{ mt: 3, ml: 2 }}
                onClick={() => {
                  setEditMode(false);
                  setEditId(null);
                  setNewUser({ name: '', email: '', password: '', dob: '' });
                }}
              >
                Cancel
              </Button>
            )}
          </Box>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            User List
          </Typography>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.dob}</TableCell>
                    <TableCell>
                      <IconButton 
                        color="primary" 
                        onClick={() => handleEdit(user)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        color="error" 
                        onClick={() => handleDelete(user.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;