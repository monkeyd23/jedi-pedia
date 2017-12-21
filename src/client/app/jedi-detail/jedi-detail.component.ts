import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../shared/api.service';
import { Jedi } from '../shared/jedi.model';

@Component({
  selector: 'app-jedi-detail',
  templateUrl: './jedi-detail.component.html',
  styleUrls: ['./jedi-detail.component.scss']
})
export class JediDetailComponent implements OnInit {

  jedi: Jedi;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getJedi();
  }

  getJedi(): void{
    const jediName = this.route.snapshot.paramMap.get('name');
    this.api.post('jedi',{'name': jediName})
    .subscribe(data => this.jedi = data);
  }

}
