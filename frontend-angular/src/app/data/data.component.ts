import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {
  message: string = ''; // Initialize with an empty string

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getData().subscribe((data: any) => {
      this.message = data.message;
    });
  }
}
