import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { customThemeXCards } from "../../../themeConfig";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: "30px 0px" }}>
      <ThemeProvider theme={customThemeXCards}>
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h3">
            Precio: ${item.price}
          </Typography>
        </CardContent>

        <Grid container>
          <Grid item xs={12} sm={5}>
            <CardMedia
              sx={{ height: 150 }}
              image={item.image}
              title={`image ${item.title}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardContent sx={{ paddingTop: 0 }}>
              <Typography gutterBottom variant="h5" color="text.secondary">
                Autor: {item.author}
              </Typography>
              <Typography gutterBottom variant="h5" color="text.secondary">
                Editorial: {item.publisher}
              </Typography>
              <Typography gutterBottom variant="h5" color="text.secondary">
                Categoría: {item.category}
              </Typography>
            </CardContent>
          </Grid>
          <CardContent sx={{ paddingTop: 0 }}>
            <Typography gutterBottom variant="h5" color="text.secondary">
              Breve descripción: {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`/detalles/${item.id}`} style={{ marginRight: "10px" }}>
              <Button size="small" variant="outlined">
                Detalles
              </Button>
            </Link>
            <Button size="small" variant="contained">
              Agregar al carrito
            </Button>
          </CardActions>
        </Grid>
      </ThemeProvider>
    </Card>
  );
};

export default ProductCard;
