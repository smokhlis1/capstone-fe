import { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

    const columns: GridColDef[] = [
    { field: 'name', headerName: 'Monster Name', flex: 1},
    { field: 'height', headerName: 'Height(ft/in)', flex: 1},
    { field: 'weight', headerName: 'Weight(lbs)', flex: 1},
    { field: 'type', headerName: 'Type', flex: 1}
    ]
    function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { monsterData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
    setOpen(true)
    }

    const handleClose = ()  => {
    setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }


  return (
    <>
    <Modal 
        id={selectionModel}
        open={open} 
        onClose={handleClose}
    />
    <div className="flex flex-row">
        <div>
            <button 
            className="p-3 m-3 bg-red-400 rounded hover:bg-red-800 hover:text-black"
            onClick={() => handleOpen()}
            >
                Create New Monster
            </button>
        </div>
        <Button onClick={handleOpen} className='p-3 m-3 bg-red-400 rounded hover:bg-red-800 hover:text-black' >Update</Button>
        <Button onClick={deleteData} className='p-3 m-3 bg-red-400 rounded hover:bg-red-800 hover:text-black' >Delete</Button>
    </div>
    <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: '100%' }}
    >
        <h2 className="p-3 bg-red-300 my-2 rounded">My Monsters</h2>
        <DataGrid rows={monsterData} columns={columns}
        checkboxSelection={true}
        onRowSelectionModelChange={ (item:any) => {
            setSelectionModel(item);
        }}
         />
    </div>
    </>
  )
}

export default DataTable
