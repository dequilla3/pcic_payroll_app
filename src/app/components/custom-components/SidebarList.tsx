import { SvgIconProps } from "@mui/material";

interface SideBarListProps {
  title?: string;
  icon?: React.ElementType<SvgIconProps>;
  onClick?: () => void;
  isClicked?: boolean;
}

export default function SideBarList({
  title,
  icon: Icon,
  onClick,
  isClicked,
}: SideBarListProps) {
  return (
    <li
      className={
        isClicked
          ? "cursor-pointer pl-6 mb-2 p-3 text-sm bg-green-100 sm:pl-9 font-semibold border-r-4 border-green-700 transition-all"
          : "hover:font-semibold cursor-pointer pl-6 mb-2 p-3 text-sm hover:bg-green-100 sm:pl-9"
      }
      onClick={onClick}
    >
      <div className="flex">
        {Icon && <Icon className="mr-2" />}
        <div className="sm:hidden md:block">{title}</div>
      </div>
    </li>
  );
}
