import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  messages1: Message[] = [];
  constructor(private messageService: MessageService) { }


  ngOnInit(): void {
    // const htmlContent = `<b>Hello World</b>`;
    // this.messages1 = [
    //   { severity: 'success', summary: 'Heading', detail: 'More details....' },
    //   { severity: 'warn', summary: 'Heading', detail: 'More details....' },
    //   { severity: 'info', summary: 'Heading', detail: 'More details....' },
    //   { severity: 'error', summary: 'Heading', detail: htmlContent, icon: 'pi pi-spin pi-spinner' }
    // ];
  }

  addMessages() {
    this.messageService.addAll([
      { severity: 'success', summary: 'Heading', detail: 'More details....' },
      { severity: 'warn', summary: 'Heading', detail: 'More details....' }
    ]);
  }

  clearMessages() {
    this.messageService.clear();
  }

}
