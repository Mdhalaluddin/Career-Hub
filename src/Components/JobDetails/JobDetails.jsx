import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from 'react-icons/ai';
import { BsPersonWorkspace } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    
    const hendleNotify = () => {
        saveJobApplication(idInt);
        toast("You are successfully full!")};
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4 bg-slate-50 p-5">
                <div className="border md:col-span-3">
                    <h2><span className="text-xl font-semibold my-2">Job Description : </span> {job.job_description}</h2>
                    <p className="my-2"><span className="text-xl font-semibold ">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="my-2"><span className="text-xl font-semibold">Educational Requirements:</span>
                        <br /> <span>{job.educational_requirements}</span></p>
                    <p className="my-2"><span className="text-xl font-semibold">Job Experiences:</span>
                        <br /> <span>{job.experiences}</span>
                    </p>

                </div>
                <div className="border bg-red-400 text-white">
                    <h2 className="text-2xl my-5 text-center">Jobs Details</h2>
                    <hr className="m-5" />
                    <div className="ml-4">
                        <h3 className="flex items-center gap-2"> <span className="text-2xl"><AiOutlineDollar></AiOutlineDollar></span> <span className="text-md font-semibold">salary :</span> {job.salary}</h3>
                        <h2 className="flex items-center gap-2"><span className="text-2xl"><BsPersonWorkspace></BsPersonWorkspace></span> <span className="text-md font-semibold">Job Title:</span> {job.job_title}</h2>
                    </div>
                    <h2 className="text-2xl font-semibold text-center my-3">Contract Information</h2>
                    <hr className="m-5" />
                    <div className="ml-4">
                    <p>Phone: {job.contact_information?.phone}</p>

                    </div>
                    <div className="grid items-justify-center mx-4 my-2">
                        <Link to={'/applied'}>
                        <button onClick={hendleNotify} className="btn btn-primary">Apply Now</button>
                        </Link>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;