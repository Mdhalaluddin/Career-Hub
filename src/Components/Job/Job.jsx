import { CiLocationOn } from 'react-icons/Ci';
import { BiDollar } from "react-icons/Bi";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name,remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl my-4 p-5">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <h4 className="text-2xl">{company_name}</h4>
                <div>
                    <button className="px-5 mr-4 py-2 font-bold border rounded border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 mr-4 py-2 font-bold border rounded border-[#7E90FE]">{job_type}</button>
                </div>
                <div className='flex justify-between gap-4'>
                    <h2 className="font-semibold flex items-center gap-2 my-4"><CiLocationOn className='text-2xl'></CiLocationOn>{location}</h2>
                    <h2 className="font-semibold flex items-center"><BiDollar className='text-2xl'></BiDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;