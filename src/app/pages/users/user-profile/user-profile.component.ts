import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
   product_id: number;

  constructor(private activeRouter: ActivatedRoute) {
    this.product_id = this.activeRouter.snapshot.params.id;
    console.log(this.product_id);
  }

  ngOnInit(): void {

  }

}
