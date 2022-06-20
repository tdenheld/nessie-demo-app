import { Component, OnInit } from '@angular/core';
import colors from '@nessie/web-fundamentals/build/web/tokens-colors-css.json';
import colorsRGB from '@nessie/web-fundamentals/build/web/tokens-colors.json';
import colorsPalet from '@nessie/web-fundamentals/build/web/tokens-colors-palet.json';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class PageFundamentalsComponent implements OnInit {
  public colors = Object.entries(colors);

  private componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private rgbToHex(rgb: string) {
    const rgbArray = rgb.split(", ");
    return "#" +
      this.componentToHex(parseInt(rgbArray[0], 10)) +
      this.componentToHex(parseInt(rgbArray[1], 10)) +
      this.componentToHex(parseInt(rgbArray[2], 10));
  }

  public getColorPalet(index: number) {
    const object: any = colorsPalet;
    const value: string = this.getColorRGB(index);
    return Object.keys(object).find(key => object[key] === value);
  }

  public getColorRGB(index: number) {
    const arr = Object.values(colorsRGB);
    return arr[index];
  }

  public getColorHex(index: number) {
    const arr = Object.values(colorsRGB);
    return this.rgbToHex(arr[index].replace('rgb(', '').replace(')', ''));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
