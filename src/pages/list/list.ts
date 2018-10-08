import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: any[];
  items: Array<{id: number, dorm_name: string, dorm_type: string, distance: string}>;
  latitude: number
  longitude: number

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.icons = [
    {
        "id": 1,
        "dorm_name": "Cove\u0027s Boarding House",
        "dorm_type": "coed",
        "distance": "48.3333992576802"
    },
    {
        "id": 2,
        "dorm_name": "Very Suspicious Supermarket",
        "dorm_type": "female",
        "distance": "9600.24302202471"
    }
];

    this.items = [];
    for(let i = 0; i < this.icons.length; i++) {
      this.items.push(this.icons[i]);
    }
	
	let watch = this.geolocation.watchPosition();
	watch.subscribe((data) => {
		// data can be a set of coordinates, or an error (if an error occurred).
		this.latitude = data.coords.latitude
		this.longitude = data.coords.longitude
	});
  }

  itemTapped(event, item) {
    //this.navCtrl.push(ItemDetailsPage, {
    //  item: item
    //});
  }
  
  refreshButton(event) {
	  // does nothing for now
  }
}
