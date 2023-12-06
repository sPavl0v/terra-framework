import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { ActiveBreakpointContext } from 'terra-breakpoints';
import { IconDocuments, IconFeaturedOutline, IconImage } from 'terra-icon';

const getNumberOfColumns = (activeBreakpoint) => {
  switch (activeBreakpoint) {
    case 'enormous': return 4;
    case 'huge': return 3;
    case 'large': return 2;
    case 'medium': return 2;
    case 'small': return 1;
    case 'tiny': return 1;
    default: return 1;
  }
};

const rows = [
  {
    id: 'row_1',
    cells: [
      { content: <IconDocuments a11yLabel="Documents" height="1.5em" width="1.5em" /> },
      { content: 'Discern Care Set (1)' },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Arterial Sheath Care (3)' },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { content: ' ' },
      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },
      { content: ' ' },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Arterial Sheath Care (5)' },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
];

const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: '60px',
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    width: '200px', // will be disregarded as flexGrow prop set to true will make it flex growing column
    flexGrow: true,
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: '60px',
    align: alignTypes.CENTER,
  },
];

const HorizontalFlow = () => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  return (
    <CompactInteractiveList
      id="with-breakpoints"
      rows={rows}
      columns={cols}
      numberOfColumns={getNumberOfColumns(activeBreakpoint)}
      flowHorizontally
    />
  );
};

export default HorizontalFlow;