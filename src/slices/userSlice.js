import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    image: 'https://i.pinimg.com/originals/e0/f0/e8/e0f0e8ab0cb3edda52e1312be241b449.jpg',
    username: 'daisy19',
    first: 'Daisy',
    last: 'Doug'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeImage: (state, action) => {
        console.log('hello world')
        const image = action.payload;
        state.image = image;
    },
    changeUsername: (state, action) => {
        state.username = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeImage, changeUsername } = userSlice.actions

export default userSlice.reducer;