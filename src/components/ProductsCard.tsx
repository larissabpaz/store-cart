import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, IconButton, Collapse, CardContent, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButtonProps } from '@mui/material/IconButton';
//import { Link } from 'react-router-dom';

interface ProductsCardProps {
  id: number;
  name: string;
  price: number;
  img_url: string;
  description: string;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductsCard({ id, name, price, img_url, description }: ProductsCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box display="flex" gap={2} justifyContent="flex-start" flexWrap="wrap">
    <Card sx={{ maxWidth: 200, margin: '2%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="194"
        image={img_url}
        alt={name}
      />
      <CardHeader
        title={name}
        subheader={`R$ ${price}`}
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="mostrar mais"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
      />
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2">{description}</Typography>
          {/* <Link to={`${img_url}`}>Ver Detalhes</Link> */}
        </CardContent>
      </Collapse>
    </Card>
    </Box>
  );
}


