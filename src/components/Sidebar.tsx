import React, { useCallback, useEffect, useState } from "react";
import Socialicons from "./Socialicons";
import Mode from "./Mode";

type ScrollProgress = {
  target: React.RefObject<HTMLElement>;
};
const Sidebar: React.FC<ScrollProgress> = ({ target }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollListener = useCallback(() => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (windowScrollTop === 0) {
      return setScrollProgress(0);
    }
    if (windowScrollTop > totalHeight) {
      return setScrollProgress(100);
    }
    setScrollProgress((windowScrollTop / totalHeight) * 100);
  }, [target]);
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);

  return (
    <div className=" fixed right-0 w-[150px] h-full px-[50px] py-[20px] hidden lg:block">
      <div className="w-[50px] flex justify-center items-center ">
        <div className="space-y-[20px]">
          <div>
            <Mode size="20px" />
          </div>
          <div className="flex justify-center items-center">
            <div className=" h-[200px] border border-black w-[10px]">
              <div
                className="bg-black w-[10px] "
                style={{ height: `${scrollProgress}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-[10px]">
            <Socialicons src="/assets/x.svg" to="/" size="20px" />
            <Socialicons src="/assets/linkedin.svg" to="/" size="20px" />
            <Socialicons src="/assets/github.svg" to="/" size="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
