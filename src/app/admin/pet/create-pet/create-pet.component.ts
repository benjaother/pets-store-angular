import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tag } from 'src/app/models/tag.model';
import { CategoryService } from 'src/app/services/category.service';
import { PetService } from 'src/app/services/pet.service';
import { TagService } from 'src/app/services/tag.service';
import { Category } from 'src/app/models/category.model';
import { Pet } from 'src/app/models/pet.model';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  petForm: FormGroup;
  tags: Tag[];
  categories: Category[];

  submitted = false;

  constructor(private petService: PetService, private fb: FormBuilder,
      private _tagService: TagService, private _categoryService: CategoryService) { 

    this.petForm = this.fb.group({
      name: ['', [Validators.required]],
      photourl: ['', [Validators.required]],
      status: true,
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
      tag: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    /**
     * Rellena los tags del formulario
     */
    this._tagService.getAll().subscribe((data: any) => {
      if (data.ok)
        this.tags = data.tags;

      console.log(data);
    }, error => {
      console.error(error);
    });

    /**
     * Rellena las categorias del formulario
     */
    this._categoryService.getAll().subscribe((data: any) => {
      if (data.ok) 
        this.categories = data.categories;

      console.log(data);
    }, error => {
      console.error(error);
    });
  }

  createNew(pet: FormGroup) {
    this.submitted = true;
    
    if (pet.invalid)
      return;

    const _pet: Pet = new Pet(pet.value.name, pet.value.photourl, 
      pet.value.status, pet.value.price, pet.value.category, pet.value.tag);

      console.log(pet.value);
    
    this.petService.create(_pet).subscribe(data => {
      alert('Se ha creado el pet');
    }, error => {
      console.error(error);
    });
  }

  campoNoValido(campo: string) {
    return (this.petForm.get(campo).invalid && this.submitted) ? true : false;
  }
}
