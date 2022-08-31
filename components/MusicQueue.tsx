import React from 'react'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'title', headerName: 'Musica', width: 325 },
    { field: 'videoId', headerName: 'ID da musica', width: 150 },
    { field: 'author', headerName: 'Usuário', width: 150 },
];

type Props = {
    rows: {id: number,
        title: string,
        videoId: string,
        author: string}[];
}


export default function MusicQueue({ rows }: Props) {
    return (
        <div style={{ height: 350, width: 640, float: 'right' }}>
            <h1 className='font-bold text-4xl text-center'>Fila</h1>
            <DataGrid rows={rows} columns={columns} pageSize={5} localeText={{
                footerRowSelected(count) {
                    return `${count} linha selecionada`
                },
                noRowsLabel: 'Sem músicas',
                MuiTablePagination: {
                    labelDisplayedRows: ({ from, to, count }) =>
                        `${from} - ${to} de ${count} músicas`,
                },
            }} />
        </div>
    )
}
