
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboards
    </div>
)
const AddExpensePage = () => (
    <div>
        Add Expense Page
    </div>
)
const EditExpensePage = () => (
    <div>
        Edit Expense Page
    </div>
)
const HelpPage = () => (
    <div>
        Help Page
    </div>
)
const NotFoundPage = () => (
    <div>
        404 Not Found
    </div>
)
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('app'))


