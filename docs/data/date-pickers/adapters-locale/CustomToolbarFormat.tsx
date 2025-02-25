import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Unstable_StaticNextDatePicker as StaticNextDatePicker } from '@mui/x-date-pickers/StaticNextDatePicker';

export default function CustomToolbarFormat() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticNextDatePicker
        displayStaticWrapperAs="desktop"
        defaultValue={dayjs('2022-04-07')}
        componentsProps={{ toolbar: { toolbarFormat: 'ddd DD MMMM' } }}
        showToolbar
      />
    </LocalizationProvider>
  );
}
