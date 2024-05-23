import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
// import AddTicket from './pages/new-ticket/AddTicket';
// import TicketListing from './pages/ticket-listing/TicketListing';
// import Ticket from './pages/ticket/Ticket';
// import Dashboard from './pages/dashboard/Dashboard';
import Entrypage from './pages/entry/EntryPage';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Entrypage/>}/>
            {/* <Route path='dashboard' element={<Dashboard/>}/> */}
            {/* <Route path='addticket' element={<AddTicket />}/> */}
            {/* <Route path='tickets' element={<TicketListing />}/> */}
            {/* <Route path='ticket/:id' element={<Ticket />}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
