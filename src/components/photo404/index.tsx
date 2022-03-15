import { Link } from "react-router-dom";
import pageErroSvg from "../../assets/page-error.svg";

export function Photo404Component() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <img className="h-96" src={pageErroSvg} alt="" />
      <section>
        <p>
          Página não encontrada{" "}
          <Link to={"/"} className="text-sky-300">
            volta!
          </Link>
        </p>
      </section>
    </div>
  );
}
