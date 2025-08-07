import React from 'react'

const Finances = () => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl border bg-slate-100 border-gray-200 shadow-chart sm:gap-4 sm:p-4 basis-7/12 max-w-2xl md:h-full">
      <h1 className="text-2xl font-italiana">Finances</h1>

      <div className="flex gap-10">
        <h3 className="font-julius">Total Revenue</h3>
        <h3 className="font-julius">Total Expenses</h3>
        <h3 className="font-julius">Total Profit</h3>
      </div>
    </div>
  )
}


export default Finances