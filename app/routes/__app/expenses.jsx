import {Link, Outlet} from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList"
import { FaPlus, FaDownload } from 'react-icons/fa'

const DUMMY =[ {
    id: "e1",
    title: "first expenses",
    amount: 12.99,
    date: new Date().toISOString()
    
},
{
    id: "e2",
    title: "second expenses",
    amount: 134.99,
    date: new Date().toISOString()
    
}];

export default function ExpensesLayout() {
    return (
        <>
          <Outlet />
            <section id="expenses-actions">
                <Link to="add">
                    <FaPlus />
                    <span>Add Expenses</span>
                </Link>
                <a href="/expenses/raw">
                  <FaDownload />
                  Load Raw Data
                </a>
            </section>  
          <main>
            <ExpensesList expenses={DUMMY} />
          </main>
        </>
    )
}
