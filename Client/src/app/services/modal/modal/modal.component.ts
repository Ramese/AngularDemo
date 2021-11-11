import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
	public content: ModalContent[];
	private _isClosed: boolean;
	public actionForClient: ActionForClient;

	constructor(public activeModal: NgbActiveModal, 
		private router: Router, 
		private auth: AuthService) 
	{ 
		this.content = [];
		this._isClosed = false;
		this.actionForClient = ActionForClient.DoNothing;
	}
	
	add(newContent: ModalContent) {
		this.content.push(newContent);

		if(newContent.actionForClient == ActionForClient.Logout) {
			this.actionForClient = ActionForClient.Logout;
		}
	  
		if(newContent.actionForClient == ActionForClient.Home) {
			if(this.actionForClient != ActionForClient.Logout) {
				this.actionForClient = ActionForClient.Home;
			}
		}
	}

	close(): void {
		this._isClosed = true;
		this.activeModal.close();
		this.doAction();
	}

	isClosed(): boolean {
		return this._isClosed;
	}

	private doAction() {

		switch(this.actionForClient) {
		  case ActionForClient.Logout:
			this.actionForClient = ActionForClient.DoNothing;
			this.auth.Logout();
			this.router.navigate(['/login']);
			break;
		  case ActionForClient.Home:
			this.actionForClient = ActionForClient.DoNothing;
			this.router.navigate(['/']);
			break;
		  default:
			break;
		}
	  }
}

export class ModalContent {
	public style: string;
	public content: string;
	public date: Date;
	public actionForClient: ActionForClient;

	constructor() {
		this.style = "";
		this.content = "";
		this.date = new Date();
		this.actionForClient = ActionForClient.DoNothing;
	}
}
  
export enum ActionForClient {
	Logout = "LOGOUT",
	Home = "HOME",
	DoNothing = "DO_NOTHING"
}
