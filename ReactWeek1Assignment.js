class Student {
    //Student constructor
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

    class Bootcamp {
        // Bootcamp Constructor
        constructor(name, level, students = []) {
            this.name = name;
            this.level = level;
            this.students = [];
        }
        
        //registerStudent method, allowed only new students's REGISTRATION
        registerStudent(studentToRegister) {
            //const index = this.students.filter(findStudent => findStudent.email == studentToRegister.email);
            const index = this.students.findIndex(findStudent => findStudent.email == studentToRegister.email);
            if (index < 0) {
                this.students.push(studentToRegister)
                console.log("Registering " + studentToRegister.email + " to the bootcamp Web Dev Fundmentals");
                return studentToRegister;
            }
            else {
                console.log("Duplicate student. Student already exists: "  + index );
            }    
        }

        //callRegisterStudent method,  newstudent's name, email, community verified that new student or existing student
        callRegisterStudent()
        {
            newStudent = new Student(this.name, testEmail, testcommunity);
            registerStudent(newStudent);
        }
    }
