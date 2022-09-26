import { Link } from "react-router-dom";
export default function CategoryCard({ image, category, link }) {
  return (
    <div className="w-[170px]">
      <Link to={link}>
        <div>
          <img
            className="h-[200px] w-full object-cover hover:-translate-y-5 transition-transform duration-500"
            src={image}
            alt="panjabi"
          />
        </div>
        <p className="font-bold text-center text-gray-600 capitalize text-lg py-2">
          {category}
        </p>
      </Link>
    </div>
  );
}
