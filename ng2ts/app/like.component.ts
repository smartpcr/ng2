import {Component} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
        <i 
            class='glyphicon glyphicon-heart'
            [class.liked]='like'
            (click)='onClick()'
        ></i>
        <span>{{ totalLikes }}
    `,
    styles: [`
        .glyphicon-heart {
            color: #CCC;
            cursor: pointer;
        }

        .highlighted {
            color: pink;
        }

        .liked {
            color: red;
        }
    `]
})
export class LikeComponent {
    like = true;
    totalLikes = 10;

    onClick() {
        if(this.like) {
            this.totalLikes ++;
        }
        else {
            this.totalLikes--;
        }

        this.like = !this.like;
        
    }
}