import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { onMouseOver } from "./toolbox";
import { onMouseOut } from "./toolbox";
import BasicTextFields from "./toolbox";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    marginRight: "50%",
    padding: theme.spacing(2, 4, 3)
  }
}));

const mystyle = {
  color: "black",
  padding: "20px",
  marginTop: "40px",
  position: "center",
  border: "2px solid #000"
};

const login = {
  fontSize: "19px",
  textDecoration: "underline"
};

export default function Login() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //test//
  return (
    <div>
      <p
        style={login}
        onClick={handleOpen}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOut}
      >
        Login
      </p>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form style={mystyle}>{BasicTextFields()}</form>
          <br />
          <button onClick={handleClose}> Registrer Bruker! </button>
        </div>
      </Modal>
    </div>
  );
}
