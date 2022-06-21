import { Component, OnInit } from '@angular/core';
import colors from '@nessie/web-fundamentals/build/web/tokens-colors.json';
import colorsPalet from '@nessie/web-fundamentals/build/web/tokens-colors-palet.json';
import semanticColors from '@nessie/design-tokens/properties/semantic-colors.json';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  // Private
  // ----------------------------------------------------------
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

  // Public
  // ----------------------------------------------------------
  public colorCategories = [
    {
      title: 'Palet',
      colors: Object.entries(colorsPalet),
    },
    ...Object.keys(semanticColors.color).map((key) => {
      return {
        title: key.replace('-', ' ').replace('bg', 'background'),
        colors: [...this.filterKeys(colors, key)],
      };
    })
  ];

  public getColorHex(value: string | any) {
    return value.startsWith('rgba') ? '' :
      this.rgbToHex(value.replace('rgb(', '').replace(')', ''));
  }

  public getColorRGB(value: string | any) {
    const a = value.startsWith('rgba') ? 'a' : '';
    return value.replace(`rgb${a}(`, '').replace(')', '');
  }

  public getRGBA(value: string | any) {
    return value.startsWith('rgba') ? 'A' : '';
  }

  public getColorPalet(value: string | any) {
    const obj: any = colorsPalet;
    return Object.keys(obj).find(key => obj[key] === value);
  }

  // Constructor
  // ----------------------------------------------------------
  constructor() { }
  ngOnInit(): void { }
}
