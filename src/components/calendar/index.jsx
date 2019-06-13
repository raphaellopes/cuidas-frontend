// vendors
import React from 'react';
import PropTypes from 'prop-types';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';

// locals
import { CalendarStyle } from './styles';

const Calendar = ({ color, borderColor, ...props }) => (
  <CalendarStyle color={color} borderColor={borderColor}>
    <Flatpickr {...props} />
  </CalendarStyle>
);

Calendar.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.string,
};

Calendar.defaultProps = {
  color: 'dark',
  borderColor: 'dark',
};

export default Calendar;
