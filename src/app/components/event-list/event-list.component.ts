import { Component, OnInit } from '@angular/core';
import{EventService} from 'src/app/services/event.service';
import{Event} from 'src/app/Model/Event';
import{Form} from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:Event[]=[];
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events=this.eventService.getEvents();
  }
  addEvent(eventName: string, desc: string, speaker: string) {
    this.eventService.addEvent(eventName, desc, speaker);
  }
  deleteEvent(event:Event)
  {
    this.eventService.deleteEvent(event);
  }

}
