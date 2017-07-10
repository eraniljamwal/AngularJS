import { Component } from '@angular/core';

@Component({
	selector: 'app-warning-alert',
	template: `
		<p>This is Warning, You are in danger</p>
	`,
	styles:[`
		p{ 
			color:white;
			padding:20px;
			background-color: red;
			border:1px #ccc solid 
		}
	`]
})

export class WarningAlertComponent {
	
}
