import {Outlet} from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css"
import ExpnesesHeader from "~/components/navigation/ExpensesHeader"

export default function ExpensesAppLayout() {
    return (
        <>
            <ExpnesesHeader />
            <Outlet />
        </>
    )
}

export function links() {
    return [{ rel: 'stylesheet', href: expensesStyles}]
}