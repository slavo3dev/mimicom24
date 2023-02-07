import ExpenseStatistics from "~/components/expenses/ExpenseStatistics"
import Chart from "~/components/expenses/Chart"


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
export default function ExpensesAnalysisPage() {
    
    return (
        <main>
            <Chart expenses={DUMMY} />
            <ExpenseStatistics  expenses={DUMMY}/>
        </main>
    )
}