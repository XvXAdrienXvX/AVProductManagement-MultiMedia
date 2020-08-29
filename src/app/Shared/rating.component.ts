import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pm-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnChanges{
 faStarIcon = faStar;
 @Input() rating: number;
 starWidth: number;
 @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating* 100 / 5;
  }

  onClick(): void {
      this.ratingClicked.emit(`${this.rating}`);
  }

}