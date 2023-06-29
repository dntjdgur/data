import * as React from 'react';
import { Fragment, useState } from 'react';
import AppTheme from '../theme/theme';

export default function Contact() {
  const [contact, setContact] = useState(true);
  return (
    <Fragment>
      <AppTheme contact={contact}/>
    </Fragment>
  );
};