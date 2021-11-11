import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
	toasts: any[] = [];

	constructor() { }

	show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
		var toast = { textOrTpl, ...options };

		this.toasts.push(toast);
	}

	remove(toast: any) {
		this.toasts = this.toasts.filter(t => t != toast);
	}
}
