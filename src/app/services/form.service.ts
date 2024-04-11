import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appBannedWord } from '../directives/banned-word';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fb:FormBuilder) { }


  createJob(){
   return this.fb.group({
    jobTitle:['', [Validators.minLength(3),Validators.required,appBannedWord(['tazo','giorgi'])]],
    jobDescription:['', [Validators.minLength(3),Validators.required]],
    positions:this.fb.array([])
   }) 
  }

  createPosition(){
    return this.fb.group({
      positionName:['', [Validators.minLength(3),Validators.required]],
      positionDescription:['', [Validators.minLength(3),Validators.required]],
      startDate:['', Validators.required],
      endDate:['', Validators.required]
    })
  }


  addJob(Form:FormGroup){
    let jobs = Form.get('jobs') as FormArray;
    jobs.push(this.createJob());
  }

  deleteJob(Form:FormGroup,jobIndex:number){
    let jobs = Form.get('jobs') as FormArray;
    jobs.removeAt(jobIndex);
  }


  addPosition(jobGroup:FormGroup | any){
    let postions = jobGroup.get('positions') as FormArray
    postions.push(this.createPosition())
  }

  deletePosition(jobGroup:FormGroup | any,positionIndex:number){
    let postions = jobGroup.get('positions') as FormArray
    postions.removeAt(positionIndex)
  }
}
