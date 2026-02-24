import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-star',
  imports: [MatIconModule],
    template: `
        <div class="stars" >
            @for(item of getStars(); track $index){
                @if (item == 'full') {
                    <mat-icon class="star">star</mat-icon>
                }@else if(item == 'half'){
                    <mat-icon class="star">star_half</mat-icon>
                }@else{
                    <mat-icon class="star">star_border</mat-icon>
                    
                }
            }
        </div>    
    `,
  styleUrl: './star.css',
})
export class Star {
    @Input() rating : number = 0;

    getStars():('full' | 'half' | 'empty')[] {
        const stars: ('full' | 'half' | 'empty')[] = [];

        for(let i = 1; i <= 5; ++i) {
            if(i <= this.rating){
                stars.push('full');
            }else if(this.rating >= i - 0.5){
                stars.push('half');
            }else{
                stars.push('empty');
            }
        }
        return stars
    }
}
