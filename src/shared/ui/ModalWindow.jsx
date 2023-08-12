import { Box, Modal } from "@mui/material";
import PropTypes from "prop-types";

const modalWindowStyle = {
  display: 'flex',
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export const ModalWindow = ({ isOpen, handleClose, children }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={modalWindowStyle} display="flex" flexDirection="column" gap={2}>
        {children}
      </Box>
    </Modal>
  );
};

ModalWindow.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func,
	children: PropTypes.any,
};