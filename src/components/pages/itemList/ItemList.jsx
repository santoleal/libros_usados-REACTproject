import ProductCard from "../../common/productCard/ProductCard";
import "./itemlist.css";
const Itemlist = ({ items }) => {
  return (
    <section className="pintada">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default Itemlist;
