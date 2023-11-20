import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students:Student[]=[]
  message:string=''
  colorClass:string=''
  upstudent:Student[]=[]
  constructor(private service:StudentService)
  {
  
 this.students=service.findAllStudent();
  }
  showStudents(){
   
  
  }
  deleteStudent(rollno:Number){
    const res=confirm("Do u Really Wanna Delete");
    if(res)
      { this.students=this.students.filter(s=>s.rollno !=rollno);
        this.message='Record Delete';
        this.colorClass='success'
      }
      else{
        this.colorClass='error'
        this.message='Record Delete cancelled';

      }
  }
  updateStudent(s:Student){
    let ss=new Student(s.rollno,s.name,s.numberOfAttempts,s.percentage,s.subjectLearning);
  this.upstudent.push(ss)  
  }

}
