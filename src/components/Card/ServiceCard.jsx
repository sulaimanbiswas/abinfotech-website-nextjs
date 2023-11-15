import { IoChatboxEllipsesOutline } from "react-icons/io5";

const ServiceCard = async () => {
  return (
    <div className="card  bg-zinc-100 shadow rounded-sm">
      <figure className="px-10 pt-10">
        <div className=" bg-teal-500 rounded-full p-3">
          <IoChatboxEllipsesOutline className="w-10 h-10 text-white" />
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">IT Consultancy</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
