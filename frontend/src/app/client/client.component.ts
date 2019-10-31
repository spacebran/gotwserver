import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  allowedList: string[] = [];
  updatedList: string;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllowedList();
  }

  
  getAllowedList() {
    this.dataService.getAllowedList().subscribe((res:any) => {
      console.log(Array.of(res));
      this.allowedList = res;
    }, error => {
      console.log("getAllowedList failed. " + error)
    });
  }

  
  updateList() {
    this.dataService.updateAllowedList(this.updatedList).subscribe((res:any) => {
      this.allowedList = res;
    }, error => {
      console.log("getAllowedList failed. " + error)
    });
  }

}
