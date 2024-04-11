import {Component,OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from './services/form.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  form!:FormGroup

  constructor(private fb:FormBuilder,private formService:FormService){}

  ngOnInit(): void {
  this.form = this.fb.group({
    jobs:this.fb.array([])
  })  
  this.getJobs().push(this.formService.createJob());
  let pos  = this.getJobs().at(0).get('positions') as FormArray;
  pos.push(this.formService.createPosition())
  }

  getJobs(){
    return this.form.get('jobs') as FormArray;
  }

  

  getPositions(jobGroup:FormGroup | any){
    let positions = jobGroup.get('positions');
    return positions as FormArray
  }



  addNewJob(){
    this.formService.addJob(this.form)
    let newJobIndex = this.getJobs().length - 1;
    let job = this.getJobs().at(newJobIndex) as FormGroup;
    let getPosition = job.get('positions') as FormArray;
    getPosition.push(this.formService.createPosition());

    
    
  }

  deleteJob(jobIndex:number){
    if(this.getJobs().length > 1){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          this.formService.deleteJob(this.form,jobIndex)
        }
      });
    }else{
      alert("this is last one")
    }
  }

  addNewPosition(jobGroup:FormGroup | any){
    this.formService.addPosition(jobGroup)
  }

  deletePosition(jobGroup:FormGroup | any,positionIndex:number){
    if(this.getPositions(jobGroup).length > 1){
      this.formService.deletePosition(jobGroup,positionIndex)
    }else{
      alert('this is last one')
    }
  }

  submit(){

    if(!this.form.valid){
      return
    }

    console.log(this.getJobs().at(0).get('jobTitle')?.getError('minlength'));
    
  }
}