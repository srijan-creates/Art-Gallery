import { shopData } from "../../constants/ShopData";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 p-6">
      <h2 className="text-3xl md:mx-auto font-bold text-center mb-10">Shop Our Collection</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {shopData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">By {item.artist}</p>

              <div className="flex items-center text-yellow-400 text-sm mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="ml-2 text-gray-500">({item.reviews})</span>
              </div>

              <div className="mb-3">
                <span className="text-lg font-bold text-gray-800">{item.price}</span>
                {item.originalPrice && (
                  <span className="ml-2 line-through text-gray-400 text-sm">
                    {item.originalPrice}
                  </span>
                )}
              </div>

              <button className="flex items-center gap-2 btn">
                <FaShoppingCart />
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
