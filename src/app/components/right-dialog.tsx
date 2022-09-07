import { Button, Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";

export interface DialogueProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function RightDialog(props:DialogueProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Right Settings</DialogTitle>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Port"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    );
}

export default function RightDialogPanel() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Typography variant="h5" component="div">
                Select your settings below:
            </Typography>
            <br />
            <Button onClick={handleClickOpen}>
                Open settings
            </Button>
            <RightDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}