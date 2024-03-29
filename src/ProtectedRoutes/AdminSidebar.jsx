import React from 'react'
import { Sidebar } from './Sidebar.tsx'
import AdminUsers from './Adminusers.jsx'

function AdminSidebar() {
  return (
    <div>
        <div className=''>
          <Sidebar/>
          </div>
<div className=''>
  <AdminUsers/>
</div>

    </div>
  )
}

export default AdminSidebar