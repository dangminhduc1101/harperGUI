import { Button, Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText, Slider, Typography } from "@mui/material";
import React from "react";

export interface DialogueProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function LeftDialog(props:DialogueProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Left Settings</DialogTitle>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary="Port"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    );

/*     return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Left Settings</DialogTitle>
            <List>
                <ListItem>
                    <Slider defaultValue={0} aria-label="Port" valueLabelDisplay="auto"/>
                </ListItem>
            </List>
        </Dialog>
    ); */
}

export default function LeftDialogPanel() {
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
            <LeftDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}