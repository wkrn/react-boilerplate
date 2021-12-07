import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {moment(createdAt).format("YYYY-MM-DD")}</p>

    </div >
)

export default ExpenseListItem