import { Component, OnInit } from "@angular/core";
import Deck from "../classes/Deck";
import ICard from "../interfaces/ICard";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {

	// write your component code here; create the properties and methods you need to get the job
	// done as described in "app.html"; start by importing modules you need such as "./../classes/Deck"
	public deck: Deck;
	public pick: ICard;
	public cards: ICard[];
	

	public ngOnInit(): void {
		// this will init once, meaning you'll have one deck of cards
		this.deck = new Deck();
		this.cards=[];
	}


	public picker() {
		this.pick = this.deck.drawCard();
		console.log(this.pick);
		this.cards.push(this.pick);
	}
}