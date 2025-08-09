import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "../config/site";
import { title, subtitle } from "../components/primitives";
import { GithubIcon } from "../components/icons";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <section className="flex justify-center flex-col items-center py-10 space-y-8">
      <div className="w-3/4 flex justify-center">
        <h2 className="font-semibold text-6xl text-center   text-[#FEE3FA]">
          A studio for digital products that work
        </h2>
      </div>

      <div>
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
            <p className="font-semibold text-[18px] inline-block   text-[#FEE3FA]">
              and
            </p>{" "}
            <Button className="font-semibold text-[18px] text-[#FEE3FA] bg-[#FF80C0]">
              Social Good
            </Button>
          </span>
        </p>
      </div>
    </section>
  );
}
