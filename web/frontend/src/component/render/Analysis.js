import * as React from 'react';
import { Fragment, useState } from 'react';
import AppTheme from '../theme/theme';

export default function Analysis() {
  const [analysis, setAnalysis] = useState(true);
  return (
    <Fragment>
      <AppTheme analysis={analysis}/>
    </Fragment>
  );
};