import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
    <>
      <div
        className="flex dark:text-[#ddd] dark:bg-[#0f172a] px-8 
      md:px-32 xl:px-64 flex-col items-start h-full"
      >
        <Featured />
        <CategoryList />
        <div className="flex items-start w-full">
          <div className=" lg:w-9/12 w-full">
            <CardList />
          </div>
          <div className=" w-3/12 hidden lg:block">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}
