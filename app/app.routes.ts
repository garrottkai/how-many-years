import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home-component";
import {PersonComponent} from "./component/person-component";

export const allAppComponents = [
	HomeComponent,
	PersonComponent,
];

export const routes: Routes = [
	//{path: "", component: HomeComponent},
	//{path: "", component: PersonComponent },

];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
