import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.scss']
})
export class CalculatorsComponent implements OnInit {
  headerCalc: string = '';
  selected?: string;
  litres: boolean = false;
  killometres: boolean = false;
  fuel: number = 0;
  priceFuel: number = 0;
  distance: number = 0;
  rate: number = 0;
  priceOneL: number = 0;
  fuelsLeave: number = 0;
  distanceTrip: number = 0;
  total: number = 0;
  costFuel: number = 0;

  event: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  selectedVal(element: any) {
    this.selected = element.target.value;
    if(this.selected == 'None'){
      this.headerCalc = 'Нужно выбрать значение!';
      this.litres = false;
      this.killometres = false;
    }
    if(this.selected == 'val2'){
      this.headerCalc = 'Расход топлива л/100';
      this.litres = true;
      this.killometres = false;
    }
    if(this.selected == 'val3'){
      this.headerCalc = 'Расход топлива по пробегу';
      this.killometres = true;
      this.litres = false;
    }
  }

  litreCalc(val: any) {
      this.priceFuel = +val.target.value;
      this.rate = +((this.priceFuel/this.distance)*100).toFixed(2);
  }

  distanceCalc(val: any){
      this.distance = +val.target.value;
    this.rate = +((this.priceFuel/this.distance)*100).toFixed(2);
  }

  calcPrice(val: any) {
    this.fuel = +val.target.value;
    this.priceOneL = +((this.priceFuel*this.fuel)/this.distance).toFixed(2);
  }

  fuelLeave(val: any) {
    this.fuelsLeave = +val.target.value;
    this.total = +((this.fuelsLeave * this.distanceTrip)/100).toFixed(2);
    this.priceOneL = +(this.total * this.costFuel).toFixed(2);
  }

  calcDistanceTrip(val: any){
    this.distanceTrip = +val.target.value;
    this.total = +((this.fuelsLeave * this.distanceTrip)/100).toFixed(2);
    this.priceOneL = +(this.total * this.costFuel).toFixed(2);
  }

  calcCostFuel(val: any) {
    this.costFuel = +val.target.value;
    this.priceOneL = +(this.total * this.costFuel).toFixed(2);
  }
}
