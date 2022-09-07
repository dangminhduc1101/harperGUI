import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemButton, ListItemText, Slider, TextField, Typography } from "@mui/material";
import React from "react";

const comList = [
    {label: "COM1"},
    {label: "COM2"},
    {label: "COM3"},
    {label: "COM4"},
    {label: "COM5"},
    {label: "COM6"},
    {label: "COM7"},
    {label: "COM8"},
    {label: "COM9"},
    {label: "COM10"},
]

export default function LeftDialogPanel() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>Open Settings</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Autocomplete
                        id="port"
                        options={comList}
                        sx={{width:300}}
                        renderInput={(params) => <TextField {...params} label="Port" />}
                    />
                    <Autocomplete
                        id="baud"
                        options={comList}
                        sx={{width:300}}
                        renderInput={(params) => <TextField {...params} label="Baud" />}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}