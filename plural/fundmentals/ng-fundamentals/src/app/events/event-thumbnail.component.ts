import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'event-thumbnail',
    templateUrl: './events-list.component.html',
    styles: [`
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px; }
        .well div {color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event : any
    @Output() eventClick = new EventEmitter()
    

}