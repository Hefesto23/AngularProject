import { Component,OnInit,EventEmitter,Output} from '@angular/core';

import { Recipe } from '../recipe.component.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipe: Recipe[] = [
    new Recipe('A test Recipe'
                ,'This is a Test'
                ,'https://www.receitasnestle.com.br/images/default-source/recipes/pudim_de_leite_moca.jpg'),
    new Recipe('Another test Recipe'
                            ,'This is a Test'
                            ,'https://www.receitasnestle.com.br/images/default-source/recipes/pudim_de_leite_moca.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(rcpEl: Recipe){
    this.recipeWasSelected.emit(rcpEl);
  }

}
