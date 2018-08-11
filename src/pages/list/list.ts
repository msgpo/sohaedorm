import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  latitude: number
  longitude: number

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
	
	let watch = this.geolocation.watchPosition();
	watch.subscribe((data) => {
		// data can be a set of coordinates, or an error (if an error occurred).
		this.latitude = data.coords.latitude
		this.longitude = data.coords.longitude
	});
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
  
  refreshButton(event) {
	  // does nothing for now
  }
}
