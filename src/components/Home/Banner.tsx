import { Button } from "@heroui/button";

export const Banner = () => {
  return (
    <>
      <section className="bg-[url(/images/banner.png)]  bg-no-repeat bg-contain bg-center ">
        <div className="min-h-screen flex justify-center flex-col items-center space-y-8">
          <div className="w-2/4 flex justify-center ">
            <h2 className="font-semibold text-6xl text-center -mt-30 text-[#FEE3FA]">
              A Studio For Digital Products That Work
            </h2>
          </div>

          <div className="border border-[#FF80C0] px-8 py-5 rounded-lg">
            <p className="flex justify-center flex-wrap gap-2 items-center text-[18px] font-semibold text-[#FEE3FA]">
              For{" "}
              <span>
                <Button className="font-semibold text-[18px] text-[#FEE3FA] bg-[#FF80C0]">
                  Startup
                </Button>
                ,{" "}
                <Button className="font-semibold text-[18px] text-[#FEE3FA] bg-[#FF80C0]">
                  Enterprise leaders
                </Button>
                ,{" "}
                <Button className="font-semibold text-[18px] text-[#FEE3FA] bg-[#FF80C0]">
                  Media & Publishers
                </Button>
                ,{" "}
                <span className="font-semibold text-[18px] inline-block   text-[#FEE3FA]">
                  and
                </span>{" "}
                <Button className="font-semibold text-[18px] text-[#FEE3FA] bg-[#FF80C0]">
                  Social Good
                </Button>
              </span>
            </p>
          </div>

          <div className="flex gap-2">
            <Button className="font-semibold text-[18px] px-7 py-7 rounded-lg border-gray-800 border-1  text-[#FEE3FA] bg-[#13050C]">
              Nos Travaux
            </Button>

            <Button className="font-semibold text-[18px] px-7 py-7 rounded-lg   text-[#FEE3FA] bg-[#FD46CD]">
              Nos Travaux
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
