
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <nav>
    <h1>Expensify</h1>
    <Link to="/create">Create Expense</Link>
    <Link to="/edit">Edit Expense</Link>
    <Link to="/help">Help Expense</Link>
    </nav>
  </header>
)

export default Header;
