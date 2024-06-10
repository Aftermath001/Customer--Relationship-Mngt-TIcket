import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from './pages/ticket-listing/ticketsSlice'

const store = configureStore({
  reducer: {
    tickets: ticketReducer, 
  },
})

export default store