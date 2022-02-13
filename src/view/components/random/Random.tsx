import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 1000, height: 300 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://img.ltwebstatic.com/images3_pi/2021/12/22/1640181439240e48af39c634031bed5c7a8d900b29_thumbnail_900x.webp',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    
  },
  {
    img: 'https://img.ltwebstatic.com/images3_pi/2019/11/08/15732183866fb28eecebba35e511b89979b9ef91fc_thumbnail_900x.webp',
    title: 'Burger',
  },
  {
    img: 'https://img.ltwebstatic.com/images3_pi/2021/12/23/16402552450465dacd76834336075f39043fcf099c_thumbnail_900x.webp',
    title: 'Camera',
  },
  {
    img: 'https://img.ltwebstatic.com/images3_pi/2021/04/12/1618225669d67ee293d2358d4682a5fe8e0584f409_thumbnail_900x.webp',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://img.ltwebstatic.com/images3_pi/2020/11/19/16057491488e65eb10796650e32af15eebb5be59ed_thumbnail_900x.webp',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://img.ltwebstatic.com/images3_pi/2021/09/22/1632278674a094ac90b807c98a7eb4231c3548e0bf_thumbnail_900x.webp',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://img.ltwebstatic.com/images3_pi/2021/08/10/1628571802d394bc3aae9f23415e8178d6aa4a46a8_thumbnail_900x.webp',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://img.ltwebstatic.com/images3_pi/2021/04/20/1618884614ded4fabb2af1fdc523fee8b46451fa68_thumbnail_900x.webp',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];
