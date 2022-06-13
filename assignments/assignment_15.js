let teacher = {     //object using literals
    firstName: "Shruti",
    lastName: "Narayana",
    designation: "HOD",
    degrees: {//nested object
      Graduation: "B.E(ENTC)",
      Postgraduation: "M.Tech(VLSI design)",
      Phd: "Phd(Nanotechnology)",
    },
    certificate:{
        certificate1: "CCNA/CCNP",
        certificate2: "Embedded system design",
        certificate3: "nanoComputing",
    },
    info:function(){
        return this.degrees.Graduation+" "+this.degrees.Postgraduation+" "+this.degrees.Phd+" "
        +this.certificate.certificate1+" "+" "+this.certificate.certificate2+" "+" "+this.certificate.certificate3;
       

    }
};
console.log(teacher);
console.log(teacher.certificate);
console.log(teacher.degrees);
let completeName = teacher.info();
console.log(`Teacher's Degrees and certificates are: ${completeName}`);
//console.log(`Teacher's Certificate and Degree:${teacher.certificate} ${teacher.degrees}`);