import Link from "next/link";
import { TypeTodo } from "../../pages/types/types";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/todos", {
    // cache : "no-cache", // SSG
    // cache : "no-store", // SSR
    // next : { revalidate: 10,}, // 再検証　ISR
  });
  return res.json();
}

const Page = async () => {
  const todos : TypeTodo[] = await getData();

  return (
    <>
      <h1>Todos</h1>
      <div>
        {todos.map((todo) => {
          return (
            <p>{todo.title}</p>
          )
        })}
      </div>
      <Link href="/">top</Link>
    </>
  );
}

export default Page;