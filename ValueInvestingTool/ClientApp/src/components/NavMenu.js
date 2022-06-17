import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Icon';


export const NavMenu = () => {

    return (
        <AppBar position="static" style={{backgroundColor: "rgb(50, 50, 50)"}}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon style={{color: "rgb(255, 255, 255)"}} />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

//export class NavMenu extends Component {
//  static displayName = NavMenu.name;

//  constructor (props) {
//    super(props);

//    this.toggleNavbar = this.toggleNavbar.bind(this);
//    this.state = {
//      collapsed: true
//    };
//  }

//  toggleNavbar () {
//    this.setState({
//      collapsed: !this.state.collapsed
//    });
//  }

//  render () {
//    return (
//      <header>
//        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
//          <Container>
//            <NavbarBrand tag={Link} to="/">ValueInvestingTool</NavbarBrand>
//            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
//              <ul className="navbar-nav flex-grow">
//                <NavItem>
//                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
//                </NavItem>
//                <NavItem>
//                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
//                </NavItem>
//                <NavItem>
//                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
//                </NavItem>
//              </ul>
//            </Collapse>
//          </Container>
//        </Navbar>
//      </header>
//    );
//  }
//}
