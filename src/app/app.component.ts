import { Component } from '@angular/core';

export class Item{
    purchase: string;
    done: boolean;
	text: string;
     
    constructor(purchase: string) {
        this.purchase = purchase;
        this.done = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    template: 
	`<div class="col-lg-6 col-md-6 hidden-sm hidden-xs row">
		<div class="title">
			<H2>Мои задачи</H2>
		</div>
		<div class="note">
                    <input class="text" type="text" [(ngModel)]="text" placeholder = "Задача" onclick = "this.value=''"/>         
           
                    <button type="button" class="btn btn-info" (click)="addItem(text)">Добавить</button>

			<table class = "note-table">
            <tbody>
                <tr *ngFor="let item of items; let i = index">
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
					<td>{{item.purchase}}</td>
					<td><button type="button" class="btn btn-link del" (click)="items.splice(i,1)">Удалить</button></td>	
                </tr>
            </tbody>
			</table>
		</div>
    </div>
	
	<div class="col-sm-12 hidden-lg hidden-md hidden-xs row-middle">
		<div class="title">
			<H2>Мои задачи</H2>
		</div>
		<div class="note">
                    <input class="text-middle" type="text" [(ngModel)]="text" placeholder = "Задача" onclick = "this.value=''"/>     
                    <button type="button" class="btn btn-info add-btn" (click)="addItem(text)">Добавить</button>
			<table class = "note-table">
            <tbody>
                <tr *ngFor="let item of items; let i = index">
				
                    <td><input class="check" type="checkbox" [(ngModel)]="item.done" /></td>
					<td>{{item.purchase}}</td>
					<td><button type="button" class="btn btn-link del" (click)="items.splice(i,1)">[X]</button></td>
                </tr>
            </tbody>
			</table>
		</div>
    </div>
		
	<div class="col-xs-12 hidden-sm hidden-lg hidden-md row-min">
		<div class="title">
			<H3>Мои задачи</H3>
		</div>
		<div class="note">
                    <input class="text-min" type="text" [(ngModel)]="text" placeholder = "Задача" onclick = "this.value=''"/>         
                    <button type="submit" class="btn btn-info add" (click)="addItem(text)">Добавить</button>
			<table class = "note-table-min">
            <tbody>
                <tr *ngFor="let item of items; let i = index">		
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
					<td>{{item.purchase}}</td>
					<td><button type="button" class="btn btn-link del" (click)="items.splice(i,1)">[X]</button></td>
                </tr>
            </tbody>
			</table>
		</div>
    </div>`,
	styleUrls: ['css/bootstrap.min.css', 'css/bootstrap-theme.min.css', 'css/style.css']
})
export class AppComponent {
	text: string;
    items: Item[] = [ ];
    addItem(text: string): void {
         
        if(text==null || text==undefined || text.trim()=="")
            return;
		
        this.items.push(new Item(text));
    }
	
}