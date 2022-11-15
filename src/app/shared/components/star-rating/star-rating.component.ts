import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: StarRatingComponent
    }
  ]
})
export class StarRatingComponent implements OnInit {

  @Input('rating') rating: number | string;
  @Input('starCount') starCount: number = 5;

  snackBarDuration: number = 2000;
  ratingArr:Array<any>=[];
  touched: boolean=false;
  disabled: boolean=false

  constructor(private snackBar: MatSnackBar) {
  }

  onChange = (quantity:any) => {};

  onTouched = () => {};

  writeValue(value:any) {
  }
  
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }


  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    this.markAsTouched();
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.rating = rating;
    this.onChange(this.rating)
  }

  showIcon(index:number) {
    if (this.rating && this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}