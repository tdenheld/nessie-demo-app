import { Component, OnInit } from '@angular/core';
import colors from '@nessie/web-fundamentals/build/web/tokens-colors-css.json';
import colorsRGB from '@nessie/web-fundamentals/build/web/tokens-colors.json';
import colorsPalet from '@nessie/web-fundamentals/build/web/tokens-colors-palet-css.json';
import colorsPaletRGB from '@nessie/web-fundamentals/build/web/tokens-colors-palet.json';
import semanticColors from '@nessie/design-tokens/properties/semantic-colors.json';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class PageFundamentalsComponent implements OnInit {
  public semanticColors = Object.keys(semanticColors.color).map((key) => {
    return {
      title: key,
      colors: [...this.filterKeys(colors, key)],
      colorsRGB: [...this.filterKeys(colorsRGB, key)]
    };
  });

  public colorCategories = [
    {
      title: 'Palet',
      colors: Object.entries(colorsPalet),
      colorsRGB: Object.entries(colorsPaletRGB),
    },
    ...this.semanticColors
  ];

  // Private functions
  // ----------------------------------------------------------
  public fromEntries(obj: any) {
    return Object.fromEntries(obj);
  }

  private filterKeys(obj: {}, str: string) {
    return Object.entries(obj).filter(([key, value]) => {
      if (key.startsWith(str)) {
        return key.includes(str);
      } else {
        return '';
      }
    });
  }

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

  // Public functions
  // ----------------------------------------------------------
  public getColorRGB(arr: any, index: number) {
    return arr[index][1];
  }

  public getColorHex(arr: any, index: number) {
    const value: string = this.getColorRGB(arr, index);
    return this.rgbToHex(value.replace('rgb(', '').replace(')', ''));
  }

  public getColorPalet(val: any) {
    const object: any = colorsPaletRGB;
    return Object.keys(object).find(key => object[key] === val);
  }

  // Constructor
  // ----------------------------------------------------------
  constructor() { }
  ngOnInit(): void { }
}
