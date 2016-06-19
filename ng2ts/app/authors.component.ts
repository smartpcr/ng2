import {Component} from 'angular2/core';
import {AuthorService} from './authors.service';

@Component({
    selector: 'authors',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor='#author of authors'>{{author}}</li>
        </ul>
    `,
    providers: [AuthorService]
})
export class AuthorsComponent {
    title: string = 'List of Authors';
    authors: string[];

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}