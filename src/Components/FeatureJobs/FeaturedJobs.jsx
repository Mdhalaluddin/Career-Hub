import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setjobs] = useState([]);
    // show all btn er jonnu data nicci
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobs(data));
    }, [])
    return (
        <div>
            <div className="text-center my-5">
            <h2 className="text-5xl font-semibold">Featured Jobs</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis quibusdam recusandae vitae minima natus? Magni dolor enim totam iste.</p>
        </div>
        <div className="grid  grid-cols-2 gap-6 mt-5">
            {
                jobs.slice(0, dataLength).map(job=><Job key={job.id} job={job}></Job>)
            }
        </div>
        <nav className="grid justify-items-center my-5">
        <div className={dataLength === jobs.length&& 'hidden'}>
            <button onClick={()=> setDataLength(jobs.length)} className="btn btn-primary">Show all</button>
        </div>
        </nav>
        </div>
    );
};

export default FeaturedJobs;