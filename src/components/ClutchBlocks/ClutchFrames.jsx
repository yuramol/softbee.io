import { Box } from 'grommet';
import React from 'react';

export const ClutchFrames = () => {
  const ClutchFramesSrc = [
    {
      src:
        'https://shareables.clutch.co/share/badges/2066968/486?utm_source=clutch_top_company_badge&utm_medium=image_embed%22',
      title: 'ew',
    },
    {
      src:
        'https://shareables.clutch.co/share/badges/2066968/486/?utm_medium=image_embed%22&utm_source=clutch_top_company_badge',
      title: 'ew',
    },
    {
      src:
        'https://shareables.clutch.co/share/badges/2066968/34524/?utm_medium=image_embed%22&utm_source=clutch_top_company_badge',
      title: 'ew',
    },
    {
      src:
        'https://shareables.clutch.co/share/badges/2066968/46950/?utm_medium=image_embed%22&utm_source=clutch_top_company_badge',
      title: 'ew',
    },
    {
      src:
        'https://shareables.clutch.co/share/badges/2066968/34528/?utm_medium=image_embed%22&utm_source=clutch_top_company_badge',
      title: 'ew',
    },
  ];
  return (
    <Box
      align="center"
      direction="row"
      style={{ position: 'absolute', top: '330px' }}
    >
      {ClutchFramesSrc.map(item => (
        // eslint-disable-next-line react/jsx-key
        <Box>
          <iframe
            src={item.src}
            width="93"
            height="100"
            title={item.title}
            frameBorder="0"
          />
        </Box>
      ))}
    </Box>
  );
};
