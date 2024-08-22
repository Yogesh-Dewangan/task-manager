import { RiTodoLine } from "react-icons/ri";

export default function Header() {
  return (
    <section className="flex justify-between px-8 py-2 bg-blue-500 items-center">
      <div>
        <RiTodoLine className="text-2xl" />
      </div>
      <div>
        <button className="btn danger_btn">Logout</button>
        <button className="btn ml-2 white_btn">Login</button>
        <button className="btn ml-2 white_btn">Signup</button>
      </div>
    </section>
  );
}
