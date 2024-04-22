import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import LoginImage from "../../assets/LoginLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  hideLoadingAnimation,
  showLoadingAnimation,
} from "../../app/loadingAnimationController";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      showLoadingAnimation({ message: "Login..." });
      navigate("/CEHUB-AdminPanel/Dashboard/Overview");
    } catch (error) {
    } finally {
      hideLoadingAnimation();
    }
  };

  return (
    <Box
      height={"100svh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={2}
    >
      <form onSubmit={handleSubmit(handleLogin)}>
        <Grid
          container
          sx={{
            boxShadow: 7,
            borderRadius: 3,
            p: 2,
            maxWidth: 400,
          }}
        >
          <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <Box component="img" alt="Image" src={LoginImage} />
          </Grid>
          <Grid item xs={12} pt={2}>
            {/* <Typography variant="h3" textAlign={"center"}>
            Login
          </Typography> */}
          </Grid>
          <Grid item xs={12} pl={2} pr={2}>
            <Typography mb={0.5}>Username</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Username"
              error={!!errors.username}
              {...register("username", { required: "*Username is required!" })}
            />
            <Typography mb={0.5} minHeight={20} fontSize={13} color={"red"}>
              {errors.username?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} pl={2} pr={2}>
            <Typography mb={0.5}>Password</Typography>
            <TextField
              size="small"
              placeholder="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              error={!!errors.password}
              {...register("password", { required: "*Password is required!" })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography mb={0.5} minHeight={20} fontSize={13} color={"red"}>
              {errors.password?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} pl={2} pr={2} pt={1}>
            <Button fullWidth variant="contained" type="submit">
              <Typography variant="h6">Login</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} pt={3} mb={1}>
            <Typography color={"#808080"} textAlign={"center"}>
              Don’t have an account?
              <Link
                style={{
                  textDecoration: "none",
                  marginLeft: 3,
                  color: "#F47621",
                  fontWeight: 500,
                }}
                to="/sign_up"
              >
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Login;
