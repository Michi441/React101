
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/404';
import Header from '../components/header';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpense} />
      <Route path="/edit/:id" component={EditPage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

  </BrowserRouter>
)

export default AppRouter;
