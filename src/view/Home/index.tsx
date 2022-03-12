import { HeaderComponent } from "../../components/header";

export function HomeView() {
  return (
    <div className="bg-gray-200 p-5 h-screen">
      <div className="bg-white  shadow rounded-md p-2">
        <HeaderComponent />
      </div>
      <div className="bg-white pt-6 shadow rounded-md mt-1">
        <h1>Tebela</h1>
      </div>
    </div>
  );
}
