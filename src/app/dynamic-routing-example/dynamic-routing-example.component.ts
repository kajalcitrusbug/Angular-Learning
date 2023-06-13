import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing-example',
  templateUrl: './dynamic-routing-example.component.html',
  styleUrls: ['./dynamic-routing-example.component.css'],
})
export class DynamicRoutingExampleComponent implements OnInit {
  userId: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
