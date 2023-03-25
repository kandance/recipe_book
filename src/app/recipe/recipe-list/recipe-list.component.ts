import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
    ),
    new Recipe(
      'A 2nd Test Recipe',
      'This is still a test',
      'https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
