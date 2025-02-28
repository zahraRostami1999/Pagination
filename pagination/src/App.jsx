import React, { useEffect, useState } from 'react';
import useFetchTasksData from './hooks/useFetchTasksData';
import Table from './components/table/Table';

function App() {
  const tasksDataAPI = "http://localhost:3000/TasksData";
  const tasksTableData = useFetchTasksData(tasksDataAPI);
  const taskTableHeaders = ["Id", "Title", "Date"];

  return (
    <>
      <div className='flex justify-center items-center min-h-screen'>
        <Table 
          data={tasksTableData}
          headers={taskTableHeaders}
           />
      </div>
    </>
  )
}

export default App
