import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link to={`/edit/${id}`}>
        <div className="list-item">
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format("YYYY-MM-DD")}</span>
            <h3 className="list-item__data">{numeral(amount / 100).format('$0.0.00')}</h3>
        </div>

    </Link>
)

export default ExpenseListItem