'use client';

import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(46px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#fff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

interface LocaleSwitchProps {
  locale: 'en' | 'de';
  onLocaleChange: (locale: 'en' | 'de') => void;
}

export default function LocaleSwitch({ locale, onLocaleChange }: LocaleSwitchProps) {
  return (
    <FormControlLabel
      control={
        <MaterialUISwitch
          checked={locale === 'de'}
          onChange={(e) => onLocaleChange(e.target.checked ? 'de' : 'en')}
          slotProps={{
            input: {
              role: 'switch',
            },
          }}
        />
      }
      label={locale === 'en' ? 'EN' : 'DE'}
      sx={{ ml: 2 }}
    />
  );
}
