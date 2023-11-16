import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
    <>
      <div className="flex dark:text-[#ddd] dark:bg-[#0f172a] px-8 md:px-20 xl:px-40 2xl:px-60 flex-col items-start h-full">
        <Featured />
        <CategoryList />
        <div className="flex items-start w-full gap-6">
          <div className=" lg:w-8/12 w-full">
            <CardList slug={null} />
          </div>
          <div className=" w-4/12 hidden lg:block">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}
