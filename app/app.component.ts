import {Component} from "@angular/core";

@Component({
	selector: 'how-many-years',
	templateUrl: './templates/how-many-years.html'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}
