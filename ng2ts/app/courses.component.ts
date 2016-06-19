import {Component} from 'angular2/core';
import {CourseService} from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor='#course of courses'>{{course}}</li>
        </ul>
    `,
    providers: [CourseService]
})
export class CoursesComponent {
    constructor(courseService : CourseService) {
        this.courses = courseService.getCourses();
    }

    title: string = 'The title of cources page';
    courses: string[];
}