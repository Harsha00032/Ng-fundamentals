import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from "./events/create-event.componet";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouterActivatorService } from "./events/event-details/event-router-activator.service";
import { EventListResolverService } from "./events/event-list-resolver.service";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes: Routes = [
    {path: 'events/create', component:CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    {path: 'events', component:EventsListComponent, resolve: {events:EventListResolverService} },  
    {path: 'events/:id',  component: EventDetailsComponent, 
        canActivate: [EventRouterActivatorService]},
    {path: '404', component: Error404Component},
    {path:'', redirectTo:'/events', pathMatch: 'full'},
    {path:'user',
     loadChildren: () => import ('./user/user.module')
        .then(m => m.UserModule) }
]