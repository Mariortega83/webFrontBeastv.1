import React, { useState } from 'react';
import { Button, Stack, Typography, TextField, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para enviar los datos del formulario (ej. una solicitud POST)
    console.log({ name, email, password, role });

    // Redirigir a una página después de crear el usuario
    navigate('/users');  // Cambiar esta ruta según corresponda
  };

  return (
    <Container maxWidth="xs" sx={{ padding: 4 }}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={4}>
        <Typography variant="h4" component="h1" sx={{ color: '#fff', fontWeight: 'bold' }}>
          Create New User
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                style: {
                  backgroundColor: '#1e1e1e',
                  color: '#fff',
                  borderRadius: 12,
                  padding: '10px 15px',
                },
              }}
              InputLabelProps={{
                style: { color: '#f1f1f1' },
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: {
                  backgroundColor: '#1e1e1e',
                  color: '#fff',
                  borderRadius: 12,
                  padding: '10px 15px',
                },
              }}
              InputLabelProps={{
                style: { color: '#f1f1f1' },
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                style: {
                  backgroundColor: '#1e1e1e',
                  color: '#fff',
                  borderRadius: 12,
                  padding: '10px 15px',
                },
              }}
              InputLabelProps={{
                style: { color: '#f1f1f1' },
              }}
            />
            <TextField
              label="Role"
              variant="outlined"
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              InputProps={{
                style: {
                  backgroundColor: '#1e1e1e',
                  color: '#fff',
                  borderRadius: 12,
                  padding: '10px 15px',
                },
              }}
              InputLabelProps={{
                style: { color: '#f1f1f1' },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{
                borderRadius: 12,
                padding: '14px',
                fontWeight: 'bold',
                backgroundColor: '#FF4C4C', // Rojo brillante
                '&:hover': {
                  backgroundColor: '#e03b3b', // Rojo oscuro en hover
                },
                transition: 'background-color 0.3s ease',
              }}
            >
              Create User
            </Button>

            <Button
              type="button"
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: 12,
                padding: '14px',
                fontWeight: 'bold',
                color: '#007BFF',
                borderColor: '#007BFF',
                '&:hover': {
                  backgroundColor: '#007BFF', // Azul brillante al hover
                  color: '#fff',
                },
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignUser;
