import { from } from 'rxjs';
import { Tag } from './tag.model';
import { Category } from './category.model';


export class Pet {
    constructor(
        public name: string,
        public photourl: string,
        public status: boolean,
        public price: number,
        public category?: Category,
        public tag?: Tag
    ) {

    }
}