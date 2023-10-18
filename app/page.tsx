import Link from "next/link";
import { TypeLink } from "../pages/types/types";

const Page = () => {
  const links: TypeLink[] = [
    {
      href: "/page1",
      name: "page1",
    },
    {
      href: "/todos",
      name: "todos",
    },
  ]

  return (
    <>
      <h1>Hello, Home page!</h1>
      {links.map((l) => {
        return (
          <div>
            <Link href={l.href}>{l.name}</Link>
          </div>
        )
      })}
    </>
  );
}

export default Page;