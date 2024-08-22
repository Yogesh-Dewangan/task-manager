import { SingleTaskProps } from "@/app/interfaces/task.interface";

export default function SingleTask({ task }: SingleTaskProps) {
  const { name, description, createdOn } = task;
  const createdDate = `${createdOn.getDate()}-${createdOn.getMonth()}-${createdOn.getFullYear()} ${createdOn.getHours()}:${createdOn.getMinutes()}`;

  return (
    <section className="p-4 bg-blue-100 rounded mt-2">
      <h6 className="text-black text-xl font-bold mb-1">{name}</h6>
      <p className="text-black mb-4">{description}</p>
      <p className="text-black text-xs">{createdDate}</p>
      <div className="text-end">
        <button className="btn danger_btn">Delete</button>
        <button className="btn secondary_btn ml-4">Edit</button>
        <button className="btn primary_btn ml-4">View Detail</button>
      </div>
    </section>
  );
}
