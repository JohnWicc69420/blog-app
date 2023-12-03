import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";

const colors = [
  { cat: "Style", bgColor: "bg-[#9ABED6]" },
  { cat: "Fashion", bgColor: "bg-[#D6A9C4]" },
  { cat: "Food", bgColor: "bg-[#A9C7B2]" },
  { cat: "Travel", bgColor: "bg-[#D9A28F]" },
  { cat: "Culture", bgColor: "bg-[#D9B88F]" },
  { cat: "Coding", bgColor: "bg-[#9A9AD6]" },
];

const page = ({ params }) => {
  const { slug } = params;
  let catColor, bg;
  catColor = colors.find((item) => item.cat === slug);
  bg = catColor.bgColor;

  return (
    <div className="dark:text-[#ddd] dark:bg-[#0f172a] px-8 md:px-20 xl:px-40 2xl:px-60 pt-8">
      <h1
        className={`text-3xl font-bold dark:text-[#fff] text-[#fff] w-full text-center py-1 ${bg}`}
      >
        {slug} Blogs
      </h1>
      <div className=" flex items-start w-full pt-8 gap-6">
        <div className=" lg:w-8/12 w-full">
          <CardList slug={slug} isCat={true} />
        </div>
        <div className=" w-4/12 hidden lg:block">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default page;
