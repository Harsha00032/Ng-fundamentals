import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "./shared/event.service";

@Component({
    template: `
    <div>
    <h1> Upcoming Angular Events </h1>
    <hr />
    <div class="row">
         <div *ngFor = "let event of events" class="col-md-5">
             <event-thumbnail [event] = "event"></event-thumbnail>
         </div>
    </div>
    </div>`,
})

export class EventsListComponent implements OnInit {

    events:any[]

    constructor(private eventService: EventService, private route: ActivatedRoute){
    } 

    ngOnInit(){
        console.log("loading events for list component ")
        this.events = this.route.snapshot.data['events']
        console.log("loaded events ", this.events)
    }

}