import {Outlet} from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList"

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
          <main>
            <ExpensesList expenses={DUMMY} />
          </main>
        </>
    )
}
