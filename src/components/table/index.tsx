import { TableBody } from "./body";
import { TableHead } from "./head";

export function TableComponent() {
  return (
    <table className="w-full divide-y divide-gray-200">
      <TableHead />
      <TableBody />
    </table>
  );
}
