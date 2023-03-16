// const num = [33, 36, 37, 89, 17];

// num.forEach((n) =>{
//     console.log(n);
// })

const works = [[{JobName      : "Software Engineer", 
                JobDescription: "Designing and developing effective software.",
                JobSalary     : "150, 000"}],
              [{JobName       : "Mechanical Engineer", 
                JobDescription: "Mechanical engineers design, develop, build, and test.",
                JobSalary     : "80, 000"}],
              [{JobName       : "Software Architect", 
                JobDescription: "Makes high-level design choices and frames technical standards.",
                JobSalary     : "200, 000"}],
              [{JobName       : "Boxer", 
                JobDescription: "Throw punches at each other for a predetermined amount of time in a boxing ring.",
                JobSalary     : "10, 000"}],
              [{JobName       : "Vlogger", 
                JobDescription: "Create short online films on a variety of subjects.",
                JobSalary     : "29, 000"}]];


works.forEach((data)=>{
    const jobFinder = (inputKeyWords) =>{
        if(inputKeyWords === data[0].JobName){
            console.log("Job Name       : "+data[0].JobName);
            console.log("Job Description: "+data[0].JobDescription);
            console.log("Job Salary     : "+data[0].JobSalary);
        } else if (inputKeyWords === data[0].JobName){
            console.log("Job Name       : "+data[1].JobName);
            console.log("Job Description: "+data[1].JobDescription);
            console.log("Job Salary     : "+data[1].JobSalary);
        } else if (inputKeyWords === data[0].JobName){
            console.log("Job Name       : "+data[2].JobName);
            console.log("Job Description: "+data[2].JobDescription);
            console.log("Job Salary     : "+data[2].JobSalary);
        } else if (inputKeyWords === data[0].JobName){
            console.log("Job Name       : "+data[3].JobName);
            console.log("Job Description: "+data[3].JobDescription);
            console.log("Job Salary     : "+data[3].JobSalary);
        } else if (inputKeyWords === data[0].JobName){
            console.log("Job Name       : "+data[4].JobName);
            console.log("Job Description: "+data[4].JobDescription);
            console.log("Job Salary     : "+data[4].JobSalary);
        } else console.log("Please enter a valid keyword!");
    }
    jobFinder("sssdf");
});
    

    

