import  {handleDelete} from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'Gmail', headerName: 'Gmail', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 100,
    renderCell: (params) => (
      <button
        onClick={() => handleDelete(params.id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
      >
        Delete
      </button>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Gmail: "Bluebird23szn@gmail.com" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, Gmail: "Bluebird23szn@gmail.com" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, Gmail: "Bluebird23szn@gmail.com" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, Gmail: "Bluebird23szn@gmail.com" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, Gmail: "Bluebird23szn@gmail.com" },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, Gmail: "Bluebird23szn@gmail.com" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Gmail: "hello@gmail.com" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, Gmail: "Bluebird23szn@gmail.com" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, Gmail: "Bluebird23szn@gmail.com" },
];

export default function Subscriptions() {
  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    // Update rows in local storage or API if necessary
  };

  return (
    <div style={{ height: 600, width: '100%' }} className='pl-9 pt-6'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
