import Nav from "./nav";
import Side from "./side";
import Mains from "./mains";
function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <div className="flex">
        <Side />
        <div className="sm:flex-none md:flex-1">
          <Mains />
        </div>
      </div>
    </div>
  );
}

export default Home;
