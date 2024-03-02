import clsx from "clsx";

const Container = ({ className, children }) => {
  return (
    <div className={clsx("max-w-7xl mx-auto px-10 lg:px-14", className)}>
      <div className="mx-auto ">
        {children}
      </div>
    </div>
  );
};

export default Container;
