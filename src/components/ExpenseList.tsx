import { useMemo } from 'react'
import { useBudget } from '../hooks/useBudget'
import ExpenseDetail from './ExpenseDetail'


function ExpenseList() {
  const { state } = useBudget()
  
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])

  return (
    <div className='mt-10'>
       {isEmpty ? <p className='text-gray- text-2xl font-bold'>No hay gastos</p> : (
        <>
        <p className='text-gray-500 text-2xl font-bold my-5'>Listado Gastos</p>
        {state.expenses.map( expense => (
           <ExpenseDetail
             key={expense.id}
             expense={expense}
           
           />

        ))}
        </>
       )}
    </div>
  )
}

export default ExpenseList
