import clsx from "clsx";

const Container = ({ className, children }) => {
  return (
    <div className={clsx("w-full mx-auto px-10 lg:px-14", className)}>
      <div className="mx-auto w-full">
        {children}
      </div>
    </div>
  );
};

export default Container;
