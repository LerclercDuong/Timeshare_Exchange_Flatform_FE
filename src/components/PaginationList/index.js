import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Button from "@mui/material/Button";


export default function PaginationList(props) {
    const {rows, columns} = props;
    return (
        <Box sx={{ height: 500, width: '100%', fontWeight: 600 }}>
            <DataGrid
                sx={{bgcolor: '#fff', boxShadow: 1, fontWeight: 600}}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 7,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                slots={{ toolbar: GridToolbar }}
                scrollbarSize={1}
            />
        </Box>
    );
}