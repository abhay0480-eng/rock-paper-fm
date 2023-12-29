import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const Footer = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=' mt-auto text-white w-44 ml-auto'>
        <div onClick={handleOpen} className='border-[1px] cursor-pointer rounded-lg hover:bg-white hover:text-[#3B4262]  border-[#fff] px-2 py-3 flex justify-center items-center'>
            <p>RULES</p>
        </div>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src='/images/image-rules.svg' alt=' ' className='' />
        </Box>
      </Modal>
    </div>
  )
}

export default Footer