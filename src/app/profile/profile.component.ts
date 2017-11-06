import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  _data = null;
  addres = null;
  city = null;
  constructor(private route: ActivatedRoute) {    ;
    this.route.data.subscribe(data => {
      console.log(data);
      this._data = data['profileData'];
      console.log(this._data.AddressInfo[0]);
      this.addres = this._data.AddressInfo[0];
      this.city = this.addres.City;
    })
  }

  ngOnInit() {
  }

}
