import { Recipe } from "./../recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is simple a test",
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg"
    ),
    new Recipe(
      "Test Recipe",
      "This is simple a test",
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg"
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
