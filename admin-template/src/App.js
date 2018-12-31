import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
} from '@coreui/react';
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  render() {
    return(
        <div className="App">
            <AppHeader fixed>
              this is app header
                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink href="/">Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="px-3">
                        <NavLink href="/users">Users</NavLink>
                    </NavItem>
                    <NavItem className="px-3">
                        <NavLink href="#">Settings</NavLink>
                    </NavItem>
                </Nav>

                <AppHeaderDropdown direction="down">
                    <DropdownToggle nav>
                        <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                    </DropdownToggle>
                    <DropdownMenu right style={{ right: 'auto' }}>
                        <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
                        <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
                        <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
                        <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
                        <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
                        <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
                        <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
                        <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
                        <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
                        <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
                        <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
                    </DropdownMenu>
                </AppHeaderDropdown>
            </AppHeader>
        </div>
    );
  }
}

export default App;
