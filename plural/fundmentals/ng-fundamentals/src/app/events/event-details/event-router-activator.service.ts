import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouterActivatorService implements CanActivate {

    constructor(private eventService : EventService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])
        console.log("exists" , eventExists)

        if (!eventExists)
          this.router.navigate(['/404'])
        return eventExists
    }

}