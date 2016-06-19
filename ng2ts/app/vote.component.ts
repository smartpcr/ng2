import {Component} from 'angular2/core';

@Component({
    selector: 'vote',
    template: `
        <div class='voteContainer'>
            <i 
                class='glyphicon glyphicon-menu-up vote-button'
                (click)='upVote()'>
            </i>
            <span>{{vote}}</span>
            <i 
                class='glyphicon glyphicon-menu-down vote-button'
                (click)='downVote()'>
            </i>
        </div>
    `,
    styles: [`
        div.voteContainer {
            width: 20px;
            text-align: center;
            color: 999;
        }
        i.vote-button {
            font-size: 1.2em;
            cursor: pointer;
        }
    `]
})
export class VoteComponent {
    vote = 10;
    myTotalVotes = 0;

    upVote() {
        this.vote++;
        this.myTotalVotes++;
    }

    downVote() {
        this.vote--;
        this.myTotalVotes++;
    }
}