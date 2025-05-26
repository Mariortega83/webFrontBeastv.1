import React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


interface SideMenuBtProps {
  content: string;
  act: string;
}

const SideMenuBt = ({ content, act }: SideMenuBtProps) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        width: '100%',
        height: '60px',
        borderRadius: '8px',
        boxShadow: 'none',
        fontSize: '1.2rem',
        backgroundColor: 'orange',
        '&:hover': {
          boxShadow: '0 4px 6px rgba(214, 38, 38, 0.55)',
        },
        '&:focus': {
          outline: 'none',
        },
      }}
      onClick={() => {
        window.location.href = act;
      }}
    >
      {content}<ArrowForwardIosIcon fontSize='small'
        sx={{
          paddingLeft: '20px',
        }} />
    </Button>
  );
};

export default SideMenuBt;
