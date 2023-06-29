import * as React from 'react';
import { Fragment, useState } from 'react';
import AppTheme from '../theme/theme';

export default function Carbon() {
  const [carbon, setCarbon] = useState(true);
  return (
    <Fragment>
      <AppTheme carbon={carbon}/>
    </Fragment>
  );
};