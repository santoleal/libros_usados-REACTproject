import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
          Categoría: {item.category}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
          Autor: {item.author}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
          Editorial: {item.publisher}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary">
          Breve descripción: {item.description}
        </Typography>
        <Typography gutterBottom variant="h6" color="text.primary">
          Precio: {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Agregar al carrito
        </Button>
        <Button size="small" variant="outlined">
          Sacar
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
