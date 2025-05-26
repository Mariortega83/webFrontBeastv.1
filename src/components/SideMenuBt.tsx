import React from 'react';
import { Button } from '@mui/material';


interface SideMenuBtProps {
  content: string; 
  act: string;      
}

const SideMenuBt = ({ content, act }: SideMenuBtProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{
        width: '100%',
        height: '60px',
        borderRadius: '8px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        '&:focus': {
            outline: 'none',
            },
      }}
      onClick={() => {
        window.location.href = act;
      }}
    >
      {content}  <span style={{ fontSize: '0.8em', marginLeft: '8px' }}>{'>'}</span>
    </Button>
  );
};

export default SideMenuBt;
