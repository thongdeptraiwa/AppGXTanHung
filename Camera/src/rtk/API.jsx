import { createAsyncThunk } from '@reduxjs/toolkit'
import AxiosHelper from '../helpers/AxiosHelper'

// ************** User *****************

//đăng nhập
//http://localhost:3000/tai_khoan/Login
// export const login = createAsyncThunk(
//     "tai_khoan/Login",
//     async (data, { rejectWithValue }) => {
//         try {
//             const response = await AxiosHelper()
//                 .post("/tai_khoan/Login", data);
//             //console.log(response);
//             if (response.status == true) {
//                 return response;
//             }
//         } catch (error) {
//             console.log(error.message);
//             return rejectWithValue(error.message);
//         }
//     }
// );

//đăng kí
//http://localhost:3000/tai_khoan/add
// export const apiDangKi = createAsyncThunk(
//     "tai_khoan/add",
//     async (data, { rejectWithValue }) => {
//         try {
//             const response = await AxiosHelper()
//                 .post("/tai_khoan/add", data);
//             //console.log(response);
//             if (response.status == true) {
//                 return response;
//             }
//         } catch (error) {
//             console.log(error.message);
//             return rejectWithValue(error.message);
//         }
//     }
// );

