                //0                         1                                           2
const jobs = [["Software Engineer", "Designing and developing effective software",   558999   ],//0
             ["Mechanical Engineer" , "Mechanical engineers design, develop, build, and test.", 30500],//1
             ["Magsasaka" , "Taga tanim ng mga plants in the soil" , 600800],//2
             ["Gymboy", "Mag gygym lang kikita na", 500],//3
             ["ML pro player", "Plays mobile legends till he/she gets blind", 50130]];//4



const searchHere = (inputKeyWords) => {
    if(inputKeyWords === "Software Engineer"){
        console.log(jobs[0][0]);
        console.log("Job Description: " + jobs[0][1]);
        console.log("Job Salary: " + jobs[0][2]);
    } else if(inputKeyWords === "Mechanical Engineer"){
        console.log(jobs[1][0]);
        console.log("Job Description: " + jobs[1][1]);
        console.log("Job Salary: " + jobs[1][2]);
    } else if(inputKeyWords === "Magsasaka"){
        console.log(jobs[2][0]);
        console.log("Job Description: " + jobs[2][1]);
        console.log("Job Salary: " + jobs[2][2]);
    } else if(inputKeyWords === "Gymboy"){
        console.log(jobs[3][0]);
        console.log("Job Description: " + jobs[3][1]);
        console.log("Job Salary: " + jobs[3][2]);
    } else if(inputKeyWords === "ML pro player"){
        console.log(jobs[4][0]);
        console.log("Job Description: " + jobs[4][1]);
        console.log("Job Salary: " + jobs[4][2]);
    } else console.log("Invalid keyword");
}

searchHere("Gymboy");

