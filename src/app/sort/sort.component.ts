import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { Cons } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  students:Student[]=[]
   percentages:any=[];
   constructor(private service:StudentService)
   {
   
  this.students=service.findAllStudent();
   }
  sortByPercentage()
  {
    this.percentages=this.students.sort((a, b) => a.percentage.toString().localeCompare(b.percentage.toString()));
  }
  sortByAttempts()
  {
    this.percentages=this.students.sort((a, b) => a.numberOfAttempts.toString().localeCompare(b.numberOfAttempts.toString()));
  }
  sortByNoOfsubLearning()
  {
    this.percentages=this.students.sort((a, b) => a.subjectLearning.length.toString().localeCompare(b.subjectLearning.length.toString()));
 
  }
}
