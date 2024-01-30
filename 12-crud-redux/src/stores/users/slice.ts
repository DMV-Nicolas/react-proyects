import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type UserID, type UserWithID } from '../../types'

const defaultUsers: UserWithID[] = [
  {
    id: '1',
    name: 'Nicolas Moreno',
    email: 'dmvnicolas@gmail.com',
    github: 'dmvnicolas'
  },
  {
    id: '2',
    name: 'Agustin Laje',
    email: 'agustinlaje@gmail.com',
    github: 'agustinlaje'
  },
  {
    id: '3',
    name: 'Maduro Podcast',
    email: 'nicolasmaduro@gmail.com',
    github: 'nicolasmaduro'
  }
]

const initialState = (() => {
  const usersData = localStorage.getItem('usersData')
  if (usersData !== null) return JSON.parse(usersData).users
  return defaultUsers
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserByID: (state, action: PayloadAction<UserID>) => {
      const id = action.payload
      return state.filter((user) => user.id !== id)
    }
  }
})

export const { deleteUserByID } = usersSlice.actions

export default usersSlice.reducer