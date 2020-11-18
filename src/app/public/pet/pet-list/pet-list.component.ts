import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: any;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.retrievePets();
  }

  retrievePets(): void {
    this.petService.getAll()
      .subscribe(
        data => {
          this.pets = data.pets;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
