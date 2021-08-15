const students= require('./note.js');
const yargs= require("yargs");

///////////////add///////////////////////
yargs.command({
    command:'add',
    describe:" add student",
    builder:{
        id:{
            describe:"Add student ID",
            demandOption:true,
            type:'number' 

        },
        name:{
            describe:"Add student Name",
            demandOption:true,
            type:"string"

        },
        grade:{
            describe:"Add student Grade",
            demandOption:true,
            type:"number"

        },
        
      

    },
    handler:(argv)=>{
        console.log("succuss")
        students.addStudent(argv.id, argv.name ,argv.grade);
    }

});


///////////////////read//////////////
yargs.command({
    command:'read',
    describe:" read student",
    builder:{
        id:{
            describe:"read student ID",
            demandOption:true,
            type:'number' 

        },
    },
    handler:(argv)=>{
        

        students.readstudents(argv.id);
    }

});


//////////////////delete/////////////////
yargs.command({
    command:'delete',
    describe:" delete student",
    builder:{
        id:{
            describe:"delete student ID",
            demandOption:true,
            type:'number' 

        },
    },
    handler:(argv)=>{
       
      students.deleteStudent(argv.id);
    }

});


////////////////////list///////////////////////
yargs.command({
    command:'list',
    describe:" list of student",
   
    handler:(argv)=>{
        
     students.listStudent()
    }

});


console.log(yargs.argv)