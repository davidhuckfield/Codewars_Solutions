// link : https://www.codewars.com/kata/56c22c5ae8b139416c00175d

function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) {throw new Error("Information is missing");}
    if (candidate.minSalary-(candidate.minSalary*0.1)<=job.maxSalary) {return true;}
    else {return false;}
  }
