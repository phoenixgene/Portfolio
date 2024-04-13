import React, { useCallback, useEffect, useState } from "react";

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
    <div className=" fixed right-0 w-[150px] h-full px-[50px] py-[50px] hidden lg:block">
      <div className="">
        <div></div>
        <div className="border h-[400px]">
          <div
            className="bg-black"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
