import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;

      console.log("userSlice", state.user);

      if (state.user) {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      }
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;

      localStorage.removeItem("user");
    },
  },
});

// Action creators
export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export const signup = (requestData) => async (dispatch) => {
  dispatch(loginStart());
  const { name = "", email = "", password = "" } = requestData || {};

  if (!name || !email || !password) {
    console.error("Name, Email and password are required");
    return;
  }

  return await axios
    .post("http://localhost:4001/api/user/signup", requestData)
    .then((response) => {
      dispatch(loginSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.error(error);
      dispatch(loginFailure(error.message));
      return Promise.reject(error.response.data);
    });
};

export const login = (requestData) => async (dispatch) => {
  dispatch(loginStart());
  const { email = "", password = "" } = requestData || {};

  if (!email || !password) {
    console.error("Email and password are required");
    return;
  }

  return await axios
    .post("http://localhost:4001/api/user/login", requestData)
    .then((response) => {
      dispatch(loginSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.error(error);
      dispatch(loginFailure(error.message));
      return Promise.reject(error.response.data);
    });
};

export default userSlice.reducer;
