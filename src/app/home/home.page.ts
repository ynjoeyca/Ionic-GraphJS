import { Component, OnInit } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // Data
  chartData: ChartDataSets[] = [{ data: [], label: "Stock Price" }];

  chartLabels: Label[];

  stockList: [];

  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Historic Stock Price"
    },
    pan: {
      enabled: true,
      mode: "xy"
    },
    zoom: {
      enabled: true,
      mode: "xy"
    }
  };
  chartColors: Color[] = [
    {
      borderColor: "#000000",
      backgroundColor: "#00ff00"
    }
  ];
  chartType = "line";
  showLegend = false;

  // For search
  stock: any;
  constructor(
    private http: HttpClient
  ) {
    this.getData();
  }

  ngOnInit() {
    this.getStockList();
  }

  getData() {
    this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}
    ?from=2018-03-12&to=2019-03-12`).subscribe(res => {
      const history = res["historical"];
      this.chartData[0].data = [];
      this.chartLabels = []
      for (let entry of history) {
        this.chartLabels.push(entry.date);
        this.chartData[0].data.push(entry["close"]);
      }
    });
  }

  getStockList() {
  this.http.get("https://financialmodelingprep.com/api/v3/company/stock/list").subscribe(res => {
    this.stockList = res["symbolsList"];
    console.log(this.stockList)
  })
}

typeChanged(e) {
  const on = e.detail.checked;
  this.chartType = on ? "line" : "bar";
}

}
