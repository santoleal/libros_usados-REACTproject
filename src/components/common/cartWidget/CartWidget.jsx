import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <Badge badgeContent={0} showZero color="primary">
      <ShoppingCartIcon color="palette.background.default" fontSize="large" />
    </Badge>
  );
};

export default CartWidget;
