import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../shared/api.service';
import { Jedi } from '../shared/jedi.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-jedi',
  templateUrl: './edit-jedi.component.html',
  styleUrls: ['./edit-jedi.component.scss']
})
export class EditJediComponent implements OnInit {

  jedi: Jedi;
  jediForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {
   }

  ngOnInit() {
    this.getJedi();
   }

  getJedi(): void{
    const jediName = this.route.snapshot.paramMap.get('name');
    this.api.post('jedi',{'name': jediName})
    .subscribe(data => {
      this.jedi = data;
      this.createForm();
    });
  }

  createForm(): void{
    this.jediForm = this.fb.group(this.jedi);
  }

  updateJedi(): void{
    console.log(this.jediForm.value);
    let requestBody = {
      query: {name: this.jedi.name},
      newvalue: this.jediForm.value
    };
    this.api.post('updatejedi', requestBody)
    .subscribe(data => {
      this.router.navigateByUrl('/jedis');
    });
  }

}
