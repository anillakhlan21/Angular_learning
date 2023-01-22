import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-no-parent-child-relation',
  templateUrl: './no-parent-child-relation.component.html',
  styleUrls: ['./no-parent-child-relation.component.css']
})
export class NoParentChildRelationComponent implements OnInit {
  country: string;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  setUserCountry(){
    this.auth.countryChangeEvent.emit(this.country)
  }

}
