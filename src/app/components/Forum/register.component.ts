import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  public listAnswers: any = []
  constructor(
    private _userService: UserService

  ) {



  }



  ngOnInit(): void {


    this.cargarData();


  }

  public cargarData() {


    this._userService.getanswers().subscribe(

      respuesta => {


        this.listAnswers = respuesta

      }



    )

  }
  onTableDataChange(event: any) {
    this.page = event;
    this.cargarData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.cargarData();
  }
}
