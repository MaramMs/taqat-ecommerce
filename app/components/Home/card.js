import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function CardCustom() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='border-none shadow-none'>
      <CardHeader
      
        action={
          <Typography component='span' className='bg-[#232323] block w-[48px] h-[24px] text-white text-[14px] font-light text-center'>
          New
          </Typography>
        }
    
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/product/1.png"
        alt="Paella dish"
      />
      <CardContent className='flex flex-col gap-[16px]'>
        <Typography component="span" className='text-[20px] text-[#7D7B7C] font-light'>
        Earrings
        </Typography>

        <Typography component="p" className='text-[#232323] text-[28px]' >
    
        0.23 Carat Princess Diamond
        </Typography>

        <Typography component='h5' className='text-[#7D7B7C] font-normal text-[20px]'>
        E  Colour | SI  Clarity | Excellent Cut | GIA
        </Typography>


        <Typography component="span" className='text-[26px] font-light text-[#232323]'>
        £1,800
        </Typography>
      </CardContent>
    
    </Card>
  );
}

