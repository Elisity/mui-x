import * as React from 'react';
import { describeConformance } from '@mui/monorepo/test/utils';
import {
  DateRangePickerDay,
  dateRangePickerDayClasses as classes,
} from '@mui/x-date-pickers-pro/DateRangePickerDay';
import { adapterToUse, wrapPickerMount, createPickerRenderer } from 'test/utils/pickers-utils';

describe('<DateRangePickerDay />', () => {
  const { render } = createPickerRenderer();

  describeConformance(
    <DateRangePickerDay
      day={adapterToUse.date()}
      outsideCurrentMonth={false}
      selected
      onDaySelect={() => {}}
      isHighlighting
      isPreviewing
      isStartOfPreviewing
      isEndOfPreviewing
      isStartOfHighlighting
      isEndOfHighlighting
    />,
    () => ({
      classes,
      inheritComponent: 'button',
      muiName: 'MuiDateRangePickerDay',
      render,
      wrapMount: wrapPickerMount,
      refInstanceof: window.HTMLButtonElement,
      // cannot test reactTestRenderer because of required context
      skip: [
        'componentProp',
        'rootClass', // forwards classes to DateRangePickerDayDay, but applies root class on DateRangePickerDayRoot
        'componentsProp',
        'reactTestRenderer',
        'propsSpread',
        'refForwarding',
        // TODO: Fix DateRangePickerDays is not spreading props on root
        'themeDefaultProps',
        'themeVariants',
      ],
    }),
  );
});
