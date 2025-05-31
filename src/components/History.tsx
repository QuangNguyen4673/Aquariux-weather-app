import { History } from "../types";
import CardLayout from "./CardLayout";
import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Histories({
  histories,
  getWeather,
  handleDelete,
}: {
  histories: History[];
  getWeather: (e: React.FormEvent, name: string) => void;
  handleDelete: (id: number) => void;
}) {
  return (
    <>
      <h2 className="font-bold">Search History</h2>
      <CardLayout>
        <div className="flex flex-col gap-3">
          {histories.map((his) => {
            return (
              <div key={his.id} className="flex items-center justify-between">
                <div className="text-gray-800">{`${his.name},${his.country}`}</div>
                <div className="flex gap-3.5">
                  <button
                    type="button"
                    onClick={(e) => getWeather(e, his.name)}
                    className="cursor-pointer text-blue-500 hover:text-blue-700"
                  >
                    <MagnifyingGlassIcon className="size-6 text-blue-500" />
                  </button>
                  <button
                    onClick={() => handleDelete(his.id)}
                    className="cursor-pointer text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="size-6 text-blue-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CardLayout>
    </>
  );
}
