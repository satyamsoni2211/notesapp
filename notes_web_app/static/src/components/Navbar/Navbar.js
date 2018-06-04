import { Navbar, Nav, NavItem } from 'react-bootstrap';
import React from 'react';
import Logo from '../../Assets/Logo/note.png';
import Aux from '../../hoc/Aux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import './Navbar.css';

const style = {
    backgroundColor: 'inherit',
    borderBottom: 'none',
    marginBottom: '0'
};
const logoutHandle = (p) => {
    window.sessionStorage.removeItem('token');
    p.history.push('/login');
}
const navbar = (props) => {
    return (
        <Aux>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'><img src={Logo} alt='Brand' /></Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    {window.sessionStorage.getItem('token') &&
                        <Aux>
                            <NavItem eventKey={1} componentClass='span'>
                                <Link to='/view_notes'>View Notes</Link>
                            </NavItem>
                            <NavItem eventKey={2} componentClass='span'>
                                <Link to='/create_notes'>Create Note </Link>
                            </NavItem>
                            <NavItem eventKey={3} componentClass='span'>
                                <Link to='/share_notes'>Share Note </Link>
                            </NavItem>
                            <NavItem eventKey={4} componentClass='span'>
                                <i className="glyphicon glyphicon-user" onClick={() => logoutHandle(props)}></i>
                            </NavItem>
                        </Aux>}
                </Nav>
            </Navbar>

        </Aux>);
};

export default withRouter(navbar);