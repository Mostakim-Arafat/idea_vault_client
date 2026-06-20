import Image from "next/image";
import Link from "next/link";

const IdeaCard = ({ data }) => {
    return (
        
           <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl"
                    width={200}
                    height={120}/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{data.title}</h2>
                <p><span>Category : </span>{data.category}</p>
                <p><span>Short description : </span>{data.shortDescription}</p>
                <div className="card-actions">
                    <Link href={`/Ideas/${data._id}`}>
                         <button className="btn btn-primary">View Details</button>
                    </Link>  
                </div>
            </div>
        </div>
        
    );
};

export default IdeaCard;