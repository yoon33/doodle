import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    image: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png',
    username: 'daisy19',
    first: 'Daisy',
    last: 'Doug',
    isLoggedIn: true
}

export const userSlice = createSlice({
  name: 'user', //not very important for what we're doing, just an internal identifier for redux
  initialState,
  reducers: {
    changeImage: (state, action) => {
      const image = action.payload;
      state.image = image;
    },
    changeUsername: (state, action) => {

      //equivalent to state.username = action.payload - just an intermediary variable introduced for sake of clarity
      const username = action.payload;
      state.username = username;
    },
    logout: (state) => {
      return {...state, isLoggedIn: false}
    },
    login: (state) => {
      return {...state, isLoggedIn: true}
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeImage, changeUsername, logout, login } = userSlice.actions

export default userSlice.reducer;