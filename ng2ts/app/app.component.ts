import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 Sample</h1>
        <courses></courses>
        <hr/>
        <authors></authors>
        <hr />
        <favorite></favorite>
        <div>
            <like></like>
        </div>
        <vote></vote>
    `,
    directives: [
        CoursesComponent, 
        AuthorsComponent, 
        FavoriteComponent,
        LikeComponent,
        VoteComponent
    ]
})
export class AppComponent {

}