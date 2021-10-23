import React from 'react'
import {
    Grid,
    Typography,
    Paper
} from '@mui/material'
import "./style.css"
export default function index() {
    return (
        <div className="content-header">
            <Grid container spacing={2}>
                <Grid className="content-header-parent-left" item xs={6}>
                    <div className="content-header-parent-left-name">
                        <img height="200px" width="200px" src="/logo.svg" alt="Image" />
                        <Typography variant="h5" gutterBottom component="div" color="white">
                            Google Developer Student Clubs
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" color="gray">
                            BVCOENM
                        </Typography>
                    </div>


                </Grid>
                <Grid className="content-header-parent-right" item xs={6}>
                    <img height="500px" width="700px" src="https://dscupt.tech/_next/static/images/home-875df7ff864cdbe3f228360a1b1e263f.webp" alt="Image" />
                </Grid>
            </Grid>
        </div>
    )
}
