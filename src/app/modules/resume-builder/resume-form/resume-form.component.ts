import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
  resumeform!:FormGroup

  constructor(private fb:FormBuilder, private resumeService:ResumeService, private router:Router) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.resumeform = this.fb.group({
      userdetails: this.fb.group({
        name: ['',[Validators.required]],
        designation: ['',[Validators.required]],
        email: ['',[Validators.required]],
        phone: ['',[Validators.required]],
      }),
      skills: this.fb.array([this.newSkills()]),
      experience: this.fb.array([this.newExperience()]),
      education: this.fb.array([this.newEducation()])
    })
  }

  get resume(){
    return this.resumeform.controls
  }

  onSubmit() {
    this.resumeService.saveForm(this.resumeform.value).subscribe(
      () => {console.log("success")}
    )
    this.router.navigate(['/../resume-view'])
  }
  get skills() :FormArray {
    return this.resumeform.get("skills") as FormArray
  }
  newSkills():FormGroup {
    return this.fb.group({
      skills: ['',[Validators.required]]
    })
    
  }
  addSkills() {
    this.skills.push(this.newSkills());
    console.log(this.skills.controls)
  }

  get experience() :FormArray {
    return this.resumeform.get("experience") as FormArray
  }
  newExperience():FormGroup {
    return this.fb.group({
      place: [''],
      designation: [''],
      description: [''],
      year: ['']
    })
  }
  addExperience() {
    this.experience.push(this.newExperience());
 }

  get education() :FormArray {
    return this.resumeform.get("education") as FormArray
  }
  newEducation():FormGroup {
    return this.fb.group({
      school: [''],
      degree: [''],
      score: ['']
    })
  }
  addEducation() {
    this.education.push(this.newEducation());
  }

  
}
