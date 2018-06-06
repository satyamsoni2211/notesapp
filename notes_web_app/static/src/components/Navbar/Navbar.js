import React, { Component } from 'react';
import Logo from '../../Assets/Logo/note.png';
import Aux from '../../hoc/Aux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';



class NotesNav extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    logoutHandle = () => {
        window.sessionStorage.removeItem('token');
        this.props.history.push('/login');
    }
    render() {
        return (
            <Aux>
                <Navbar color='dark' dark expand="md" className='mb-5'>
                    <Link to='/' className='nav-link navbar-brand text-uppercase text-light'>notesapp</Link>
                    {window.sessionStorage.getItem('token') &&
                        <Aux>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Link to='/view_notes' className='nav-link'>View Notes</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/create_notes' className='nav-link'>Create Note </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/share_notes' className='nav-link'>Share Note</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/shared_with_me' className='nav-link'>Share With Me</Link>
                                    </NavItem>
                                    <NavItem>
                                        <i className="fas fa-user-times nav-link" onClick={() => this.logoutHandle()}></i>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Aux>}
                </Navbar>
            </Aux>);
    }
};

export default withRouter(NotesNav);