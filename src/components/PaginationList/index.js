import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


export default function PaginationList(props) {
    const {rows, columns} = props;
    return (
        <Box sx={{ height: 500, width: '100%' }}>
            <DataGrid
                sx={{bgcolor: '#fff', boxShadow: 1}}
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

            />
        </Box>
    );
}