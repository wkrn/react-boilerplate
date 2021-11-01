import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <header>
        <h2>Expensify</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>DashBoard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create </NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </header>
)

export default Header