import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/styles';
//icons
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const CustomGrid = styled('div')((({
  display: 'grid',
  gridGap: 10,
  gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
})));

const GridFiles = () => {
  return (
    <CustomGrid>
      {[...new Array(53)].map(_file => (
        <Card key={_file}>
          <CardMedia
            component="img"
            height="194"
            src="images/sample.jpg"
          />
          <CardContent
            sx={{
              display: 'flex',
              gridGap: '10px'
            }}
          >
            <PictureAsPdfIcon />
            <Typography>
              pdf.content
            </Typography> 
          </CardContent>
        </Card>
      ))}
    </CustomGrid>
  )
}

export default GridFiles