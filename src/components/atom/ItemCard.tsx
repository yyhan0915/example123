import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface IProps {
    imageUrl: string;
    altText?: string;
    description: string;
    title: string;
}

const ItemCard: React.FC<IProps> = ({ imageUrl, altText, description, title }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={imageUrl} alt={altText} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ItemCard;
