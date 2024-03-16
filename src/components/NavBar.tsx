import clsx from "clsx";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { LuCalendarDays, LuStar } from "react-icons/lu";

interface NavBarProps {
  route: number;
}

export default function NavBar(props: NavBarProps) {
  const { route } = props;

  return (
    <nav className="text-secondarysecondary fixed bottom-0 flex w-full justify-around py-2">
      <Link
        href="/"
        className={clsx(
          "flex flex-1 flex-col items-center",
          route == 0 && "text-primary",
        )}
      >
        <GrHomeRounded />
        Home
      </Link>
      <Link
        href="/tinder"
        className={clsx(
          "flex flex-1 flex-col items-center",
          route == 1 && "text-primary",
        )}
      >
        <LuStar />
        Tinder
      </Link>
      <Link
        href="/calendar"
        className={clsx(
          "flex flex-1 flex-col items-center",
          route == 2 && "text-primary",
        )}
      >
        <LuCalendarDays />
        Calendar
      </Link>
    </nav>
  );
}
