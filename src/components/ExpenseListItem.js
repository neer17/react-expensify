import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({dispatch, id, description = '', amount = 0, createdAt = 0}) => (
    <div>
        <NavLink to={`/edit/${id}`} activeClassName="is-active" exact={true}>
        <h1>{description}</h1>
        </NavLink>
        <p>{amount} - {createdAt}</p>
    </div>
);