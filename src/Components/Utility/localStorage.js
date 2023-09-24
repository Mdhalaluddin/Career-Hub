const getStoredJobApplication = () => {
    const storedJObApplication =
        localStorage.getItem('job-application');
    if (storedJObApplication) {
        return JSON.parse(storedJObApplication);
    }
    return [];
};

const saveJobApplication = id => {
    const storedJObApplications = getStoredJobApplication();
    const exists = storedJObApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJObApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJObApplications))
    }
}
export { getStoredJobApplication, saveJobApplication };