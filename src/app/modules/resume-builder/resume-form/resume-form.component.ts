import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { resumeDetails } from '../models/resume.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
  resumeform!:FormGroup

  constructor(private fb:FormBuilder, private resumeService:ResumeService) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  buildForm() {
    this.resumeform = this.fb.group({
      userdetails: this.fb.group({
        name: [''],
        designation: [''],
        email: [''],
        phone: [''],
      }),
      skills: this.fb.array([]),
      experience: this.fb.array([]),
      education: this.fb.array([])
    })
  }



  onSubmit() {
    this.resumeService.saveForm(this.resumeform.value).subscribe(
      () => {console.log("success")}
    )
  }
  get skills() :FormArray {
    return this.resumeform.get("skills") as FormArray
  }
  newSkills():FormGroup {
    return this.fb.group({
      skills: ['']
    })
  }
  addSkills() {
    this.skills.push(this.newSkills());
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
