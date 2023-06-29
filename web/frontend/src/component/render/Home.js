import * as React from 'react';
import { Fragment, useState } from 'react';
import AppTheme from '../theme/theme';

export default function Home() {
  const home = true;
  return (
    <Fragment>
      <AppTheme home={home}/>
    </Fragment>
  );
};