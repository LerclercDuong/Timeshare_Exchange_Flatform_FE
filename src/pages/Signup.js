import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Timeshare exchange platform
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme(
    {
      palette: {
        primary: {
          main: '#283777',
        },
        secondary: {
          main: '#faa935',
        },
      },
    }
);

export default function SignUp() {
  const schema = yup.object().shape({
    firstname: yup.string()
      .required("First Name is required!")
      .matches(/^[a-zA-Z]+$/, 'Field cannot have numeric or special characters'),
    lastname: yup.string()
      .required("Last Name is required!")
      .matches(/^[a-zA-Z]+$/, 'Field cannot have numeric or special characters'),
    username: yup.string()
      .required("Username is required!")
      .min(3, 'Username must be at least 3 characters long')
      .matches(/^[a-zA-Z0-9]*$/, 'Username cannot contain special characters'),
    password: yup.string()
      .required("Password is required!")
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[*@!#%&()^~{}]+/, 'Password must have at least one special character!')
      .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter'),
    repeatPassword: yup.string()
      .required("Repeat password is required!")
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  const {
      register,
      handleSubmit,
      formState: { errors }
  } = useForm({
      resolver: yupResolver(schema),
  })
  const onRegister = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      username: data.get('username'),
      password: data.get('password'),
      repeatPassword: data.get('repeatPassword'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ mb: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onRegister)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  inputProps={{
                    maxLength: 20, // Set the maximum number of characters
                  }}
                  error={!!errors.firstname}
                  helperText={errors.firstname?.message}
                  {...register("firstname")}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputProps={{
                    maxLength: 15, // Set the maximum number of characters
                  }}
                  error={!!errors.lastname}
                  helperText={errors.lastname?.message}
                  {...register("lastname")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  inputProps={{
                    maxLength: 20, // Set the maximum number of characters
                  }}
                  error={!!errors.username}
                  helperText={errors.username ? errors.username.message : "Must be at least 3 characters long, only allows alphanumberic characters"}
                  {...register("username")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message : ["Must be at least 8 characters long, has uppercase and lowercase characters and has special characters like !@#$%..."]}
                  {...register("password")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="repeatPassword"
                    label="Repeat password"
                    type="password"
                    id="repeatpassword"
                    // autoComplete="new-password"
                    error={!!errors.repeatPassword}
                    helperText={errors.repeatPassword?.message}
                    {...register("repeatPassword")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}