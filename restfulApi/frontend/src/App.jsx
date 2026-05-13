import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AddUser from './AddUser'
import ReadUser from './ReadUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'

export default function App() {
  return (
    <div>
      <div className="flex justify-center space-x-1 p-1">
      <Link to="/" className='border rounded-2xl px-2 py-1'>Home</Link>
      <Link to="/addUser" className='border rounded-2xl px-2 py-1'>Add User</Link>
      <Link to="/readUser" className='border rounded-2xl px-2 py-1'>Read User</Link>
      <Link to="/updateUser" className='border rounded-2xl px-2 py-1'>Update User</Link>
      <Link to="/deleteUser" className='border rounded-2xl px-2 py-1'>Delete User</Link>
      </div>
      <Routes>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/readUser" element={<ReadUser/>}/>
        <Route path="/updateUser" element={<UpdateUser/>}/>
        <Route path="/deleteUser" element={<DeleteUser/>}/>
      </Routes>
    </div>
  )
}
