import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes;
  constructor(private recipeList:RecipeService) {

   }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(){
    this.recipes = this.recipeList.getRecipes();
    console.log(this.recipes);
  }


}
