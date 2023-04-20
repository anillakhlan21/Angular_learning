import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {
  profilePicUrl: string = '../../../../../../../assets/images/nature_1.jpeg'
  constructor() { }

  ngOnInit(): void {
  }

}
