import { CDN_URL } from "../utils/constants";
import defaultImage from "../../assets/default-image.png";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const MenuCard = (props) => {
  const { dishData } = props;
  const { name, price, description, imageId, defaultPrice } =
    dishData?.card?.info;
  const [itemCount, setItemCount] = useState(0);

  const imageSource = imageId === undefined ? defaultImage : CDN_URL + imageId;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    setItemCount(itemCount + 1);
    dispatch(addItem(item));
  };

  const removeItemClick = (item) => {
    if (itemCount === 0) {
      return;
    }

    setItemCount(itemCount - 1);
    dispatch(removeItem(item));
  };

  return (
    <div id="menu-card">
      <div id="menu-card-left">
        <h3>{name}</h3>
        <h4>₹{price / 100 || defaultPrice / 100}</h4>
        <p>{description}</p>
      </div>

      <div id="menu-card-right">
        <img src={imageSource} alt="" />
        <div>
          <button onClick={() => removeItemClick(dishData)}>-</button>
          {itemCount === 0 ? "ADD" : itemCount}
          <button onClick={() => handleClick(dishData)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;