import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,	
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  {
	public user;
	public repos:string[];
	public username:string;



	constructor(private _githubService:GithubService){
		this.user = false;
	}


	searchUser(){
		this._githubService.updateUser(this.username);

		this._githubService.getUser().subscribe(user => {
			this.user = user;
		});

		this._githubService.getRepos().subscribe(repos => {
			//console.log(repos);
			this.repos = repos;
		});
	}

}
