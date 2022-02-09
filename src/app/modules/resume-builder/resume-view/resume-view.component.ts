import { Component, OnInit } from '@angular/core';

import { resumeDetails } from '../models/resume.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {
  retrivedData!:any
  id!:number
  constructor(private resumeService:ResumeService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData () {
    this.resumeService.getForm().subscribe(
      (data) => {
        // debugger
        this.retrivedData = data
        console.log(this.retrivedData)
      }
    )
  }
}
