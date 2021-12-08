import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";

@Component({
    //selector: 'event-detail',
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left:20px; padding-right:20px; }
        .event-image {height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit{

    event: any
    constructor(private eventService : EventService, private route:ActivatedRoute){

    }

    ngOnInit(){
        console.log("calling getEvent for data")
        this.event = this.eventService.getEvent(this.route.snapshot.params['id'])
    }
}