import Order from "../models/OrderModel.js";
import Product from "../models/ProductModel.js";
import Restaurant from "../models/RestaurantModel.js";

const addReview = async (req, res) => {
  const findOrder = await Order.findById(req?.body?.OrderId);
  const findProduct = await Product.findById(findOrder?.products?.product);
  const findRestaurant = await Restaurant.findById(findOrder?.restaurant);
  const updateOrder = await Order.findByIdAndUpdate(req?.body?.OrderId, {
    isreviewGiven: true,
    rating: req?.body?.Rating,
  });
  const reviewtoProduct =
    (findProduct.totlaReview * findProduct.rating + req?.body?.Rating) /
    (findProduct.totlaReview + 1);
  const reviewtoRestaurant =
    (findRestaurant.totlaReview * findRestaurant.rating + req?.body?.Rating) /
    (findRestaurant.totlaReview + 1);
  const updateProduct = await Product.findByIdAndUpdate(
    findOrder?.products?.product,
    {
      totlaReview: findProduct.totlaReview + 1,
      rating: reviewtoProduct,
    },
    { new: true }
  );

  const updateRestaurant = await Restaurant.findByIdAndUpdate(
    findOrder?.restaurant,
    {
      totlaReview: findRestaurant.totlaReview + 1,
      rating: reviewtoRestaurant,
    },
    { new: true }
  );
  return res.send({
    success: true,
  });
};

export { addReview };
