import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const CustomPopup = ({ isOpen, onClose, message }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Success !</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <Button onClick={onClose}>Close</Button>
    </Dialog>
  );
};

export default CustomPopup;
