import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";
import blogs from "@/utils/data";

export default async function Home() {
  const data = await blogs();

  if (!data) {
    return (
      <>
        <h1 className="text-3xl p-3">Loading...</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="flex dark:text-[#ddd] dark:bg-[#0f172a] px-8 md:px-20 xl:px-40 2xl:px-60 flex-col items-start h-full">
          <Featured data={data} />
          <CategoryList />
          <div className="flex items-start w-full gap-6">
            <div className=" lg:w-8/12 w-full">
              <CardList slug={null} isCat={false} data={data} />
            </div>
            <div className=" w-4/12 hidden lg:block">
              <Menu home={true} data={data} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
