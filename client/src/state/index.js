import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: null,
  token: null,
  authMethod:"email",
  give:0,
  get:0,
  payments: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      // console.log(state);
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setauthMethod:(state)=>{
        state.authMethod = state.authMethod === "email" ? "google" : "email";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      state.get=0;
      state.give=0;
      state.payments=[];
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
        //my motive is to keep chat null if only friendst otherwise add chat and friend both.
        // if you send atleast one meassage it will added to firends automatically.
        // moreover i am using websockets at backend not need to store chats like this ,just for safety using it.
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPayments: (state, action) => {
      state.payments = action.payload.payments;
    },
    setCompleted: (state, action) => {
      const updatedPayement = state.payments.map((post) => {
        if (payments._id === action.payload.payments._id){
            return post.completed= true;
        }else{
        return post;
        }
      });
      state.payments = updatedPayement;
    },
    setGive:(state,action)=>{
        state.give=action.payload.give;
    },
    setGet:(state,action)=>{
        state.get=action.payload.get;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPayments, setCompleted , setGet , setGive } =
  authSlice.actions;
export default authSlice.reducer;