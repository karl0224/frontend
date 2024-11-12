import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Theater } from 'src/app/models/theater.model';
import { TheaterService } from 'src/app/services/theater.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  theaters:Theater[];
  constructor(private theatersService:TheaterService) { 
    console.log("Saludos desde el construcot")
    this.theaters=[] 
    
  }
  
  ngOnInit(): void {
    console.log("Saludos desde ngOnInit")
    this.list()
  }

  list(){
    this.theatersService.list().subscribe(data=>{
      this.theaters = data
    })
  }

}
