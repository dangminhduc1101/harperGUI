import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemButton, ListItemText, Slider, TextField, Typography } from "@mui/material";
import React from "react";

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
                    <TextField>
                        id="port"
                        label="Port (0-100)"
                        variant="standard"
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}