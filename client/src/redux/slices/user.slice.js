// features/user/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "../../utils/axios";

export const registerUser = createAsyncThunk(
    // action type string
    "user/register",
    // callback function
    async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            };
            // make request to backend
            const { token } = await axios.post(
                "/auth/registration",
                { email, password, first_name: firstName, last_name: lastName },
                config
            );
            Cookies.set("jwt", token);
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const userLogin = createAsyncThunk(
    "user/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            };
            const { token } = await axios.post(
                "/auth/login",
                { email, password },
                config
            );

            // store user's token in local storage
            Cookies.set("jwt", token);
            // localStorage.setItem("userToken", data.userToken);
            return token;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const getUserDetails = createAsyncThunk(
    "user/getUserDetails",
    async (arg, { getState, rejectWithValue }) => {
        try {
            // configure authorization header with user's token
            const config = {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            };

            const { data } = await axios.get("/auth/me", {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
                params: { token: Cookies.get("jwt") },
            });
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const logout = createAsyncThunk(
    "user/getUserDetails",
    async (arg, { getState, rejectWithValue }) => {
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            };

            const { data } = await axios.post("/auth/logout", config);
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

const userToken = localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : 123;

const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.success = true;
            state.loading = false;
            state.userInfo = payload;
            state.userToken = payload.userToken;
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [registerUser.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.success = true; // registration successful
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [getUserDetails.pending]: (state) => {
            state.loading = true;
        },
        [getUserDetails.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.userInfo = payload;
        },
        [getUserDetails.rejected]: (state, { payload }) => {
            state.loading = false;
        },
    },
});

export default userSlice.reducer;
