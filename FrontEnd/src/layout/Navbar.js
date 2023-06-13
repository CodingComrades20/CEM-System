import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Menu, Sidebar, Icon } from 'semantic-ui-react';

function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [adminBoxVisible, setAdminBoxVisible] = useState(false);
  const [superAdminBoxVisible, setSuperAdminBoxVisible] = useState(false)
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setAdminBoxVisible(false); // Close the admin box when sidebar is toggled
    setSuperAdminBoxVisible(false);
    
  };

  const handleToggleAdminBox = () => {
    setAdminBoxVisible(!adminBoxVisible);
  };
  const handleToggleSuperAdminBox = () => {
    setSuperAdminBoxVisible(!adminBoxVisible);
  };

  return (
    <>
      <Menu inverted color='dark-' stackable size='massive' style={{ borderRadius: 0 }}>
        <Container>
        <Menu.Item header>Customer Employee Management System</Menu.Item>
          <Menu.Item onClick={handleToggleSidebar}>
            <Icon name='sidebar' size='large' />
          </Menu.Item>
          
          {adminBoxVisible && (
            <>
              <Menu.Item as={Link} to='/employee' onClick={handleToggleSidebar}>
                Employee
              </Menu.Item>
              <Menu.Item as={Link} to='/department' onClick={handleToggleSidebar}>
                Department
              </Menu.Item>
            </>
          )},
          {superAdminBoxVisible && (
            <>
            <Menu.Item as={Link} to='/organization' onClick={handleToggleSidebar}>
                Organization
              </Menu.Item>
              <Menu.Item as={Link} to='/admin' onClick={handleToggleSidebar}>
                Admin
              </Menu.Item>
            </>
          )}
        </Container>
      </Menu>
     

      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible={sidebarVisible}
        width='thin'
      >
        <Menu.Item as={Link} to='/' onClick={handleToggleSidebar}>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as={Link} to='/superadminpage' onClick={handleToggleSuperAdminBox}>
          <Icon name='user' />
          Super Admin Page
        </Menu.Item>
        <Menu.Item as={Link} to='/adminpage' onClick={handleToggleAdminBox}>
          <Icon name='user' />
          Admin Page
        </Menu.Item>
        <Menu.Item as={Link} to='/financemanagerpage' onClick={handleToggleSidebar}>
          <Icon name='user' />
          Finance Manager Page
        </Menu.Item>
        <Menu.Item as={Link} to='/userpage' onClick={handleToggleSidebar}>
          <Icon name='users' />
          Employee Page
        </Menu.Item>
        <Menu.Item as={Link} to='/login' onClick={handleToggleSidebar}>
          <Icon name='sign-in' />
          Login
        </Menu.Item>
        <Menu.Item as={Link} to='/signup' onClick={handleToggleSidebar}>
          <Icon name='user plus' />
          Sign Up
        </Menu.Item>
      </Sidebar>

     
    </>
  );
}

export default Navbar;
