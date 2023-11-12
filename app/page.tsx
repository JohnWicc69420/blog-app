import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start h-full">
        <Featured />
        <CategoryList />
        <div className="flex flex-row items-start gap-14">
          <CardList />
          <Menu />
        </div>
      </div>
    </>
  );
}
