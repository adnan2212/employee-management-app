import IMG from "../assets/img/p2.jpeg";
import IMG2 from "../assets/img/p4.jpeg";
import IMG3 from "../assets/img/p5.jpeg";
import IMG4 from "../assets/img/p6.jpeg";
import IMG5 from "../assets/img/p7.jpeg";

const secondPage = () => {
  return (
    <div>
      <div className="m-4 mr-7 flex h-44 gap-2 rounded-xl bg-[#EEF2FF]">
        <div>
          <h1 className="ml-4  pt-4 text-lg font-bold text-[#0D1829]">
            Intercom
          </h1>
          <p className="text-xs">Digital Product Design</p>

          {/* TEAM */}
          <div>
            <div>
              <p className="">Team</p>
            </div>
            <div className="ml-4">
              <img
                className="absolute left-0 z-0 inline-block h-7 w-7 rounded-full"
                src={IMG}
              />
              <img
                className="absolute left-10 z-20 inline-block h-7 w-7 rounded-full"
                src={IMG2}
              />
              <img
                className="absolute left-16 z-20 inline-block h-7 w-7 rounded-full"
                src={IMG5}
              />
              <img
                className="absolute left-24 z-30 inline-block h-7 w-7 rounded-full"
                src={IMG3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secondPage;
