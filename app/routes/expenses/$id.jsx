import {useNavigate} from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"
export default function ExpensesIDPage() {
    const navigate = useNavigate()

    function closeHandle() {
        navigate('..')
    }
    return (
        <Modal onClose={closeHandle} >
            <ExpenseForm />
        </Modal>
   );
}