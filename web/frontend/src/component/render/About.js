import * as React from 'react';
import { Fragment, useState } from 'react';
import AppTheme from '../theme/theme';

export default function About() {
  const [about, setAbout] = useState(true);
  return (
    <Fragment>
      <AppTheme about={about}/>
    </Fragment>
  );
};