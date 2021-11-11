import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent, ModalContent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
	  
	private refModal: NgbModalRef;
	private options: NgbModalOptions;
	private isClosed: boolean;

  	constructor(private modalService: NgbModal) { 
		this.options = {
			scrollable: true,
			backdrop: 'static'
		};
		this.isClosed = true;
	}

  	push(content: ModalContent) {
		let vm = this;

    	content.date = new Date();

		if(!content.content) {
			content.content = "Server neodpovída, zkuste to později.";
		}
		
		 if(this.isClosed) {
		 	this.refModal = this.modalService.open(ModalComponent, this.options);
			 this.isClosed = false;
			 
			 this.refModal.result.then(function(val) {
				vm.isClosed = true;
			 }, function (val) {
				vm.isClosed = true;
			 });
		}

		this.refModal.componentInstance.add(content);
	}
}