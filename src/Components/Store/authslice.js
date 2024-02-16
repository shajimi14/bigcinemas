import { createSlice } from "@reduxjs/toolkit";

export const authslice = createSlice({
    name : 'auth',
    initialState: {
        user: null
    },
    reducers:{
        setUser: (state, action) => {
            state.user = action.payload;
            console.log('User logged in:', action.payload.email);
            window.localStorage.setItem('user', JSON.stringify(action.payload));
        },
        removeUser: (state) => {
            if (state.user) {
              console.log('Logging out user:', state.user.email);
            }
            state.user = null;
            window.localStorage.removeItem('user');
        },
        setUserFromLocalStorage: (state)=>{
            var user = window.localStorage.getItem('user');
            if(user){
                user = JSON.parse(user);
                state.user = user;
            }else{
                state.user = null;
            }
        },
    }
})
export const {setUser, removeUser, setUserFromLocalStorage}= authslice.actions
export default authslice.reducer;