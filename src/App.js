import { useEffect } from "react";
import { useSelector } from "react-redux";
import Routers from "./routers/Routers";
export default function App() {
  const allCard = useSelector((state) => state.shoppingCard);

  useEffect(() => {
    window.localStorage.setItem("cardItem", JSON.stringify(allCard));
  }, [allCard]);
  return (
    <div className="lg:px-14 px-3">
      <Routers />
    </div>
  );
}
