import {Component, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  records: any = [];
  constructor(private swUpdate: SwUpdate, private httpClient: HttpClient) {
    httpClient.get('https://www.reddit.com/r/pics.json')
      .subscribe((result: any) => {
        this.records = result.data.children;
      });
  }
  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((v) => {
        if (confirm('Actualización disponible, deseas obtenerla?')) {
          window.location.reload();
        }
      });
    }
  }
}
