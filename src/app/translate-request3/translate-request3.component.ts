import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { OpinionService } from '../opinion.service';

import { Opinion3 } from '../opinion3';
import { RequestService } from '../request.service';;

interface Max {
  name: string;
  code: number;
}
@Component({
  selector: 'app-translate-request3',
  templateUrl: './translate-request3.component.html',
  styleUrls: ['./translate-request3.component.css']
})
export class TranslateRequest3Component implements OnInit {

  isCompleted = false;
  ispol=false;
  isSum=false;
  d = false;
  s=false;
  site: String;
  transReq: String;
  transReq2: String;
  @Input() Req: String;
  opinions3: Opinion3[];
  is: number[];
  sites: string[];
  opi: Opinion3[];
  opi2:Opinion3[];
  polarity : String;
  polarities:String[];
  summary:String;
  scores:number[];
  sites2: any[] = [];
  ss=false;
  p:String;
  selectedMax: Max;

  constructor(private requestService: RequestService, private router: Router, private opinionService: OpinionService) {
    
  }
  selectedCategories: any[]=[];
  maxs: Max[] = [
    { name: '50', code: 50 },
    { name: '100', code: 100 },
    { name: '150', code: 150 },
    { name: '200', code: 200 },
  ];
  categories: any[] = [{name: 'Translation', key: 'T'}, {name: 'Downloading', key: 'D'}, {name: 'Sentiment Analysis', key: 'SA'},{name: 'Summary', key: 'S'}];


  ngOnInit(): void {
    this.selectedCategories = this.categories.slice(0,0);
  }

  translateA() {
    this.summary="";
    this.transReq2 ="";
    this.polarity = "";
    this.selectedCategories = this.categories.slice(0,0);
    this.transReq="";
    this.requestService.translateRequest(this.Req,"ar").subscribe(data => {
      this.transReq = data;
      this.selectedCategories = this.categories.slice(0,1);
      this.opi = [];
    });
  }

  Scraping() {
    console.log(this.selectedMax.code)
    this.selectedCategories = this.categories.slice(0,1);
    this.polarity = "";
    this.s=false;
    this.d = false;
    this.opi = [];
    this.opinions3 = [];
    this.isCompleted = true;

    if (this.sites2.length == 0) {
      this.sites2 = ["Hespress", "Twitter", "Youtube", "Facebook"];
    }
    this.site = this.sites2[0];

    if (this.sites2.length > 0) {
      this.opinionService.getOpinions2(this.transReq, this.sites2[0], this.selectedMax.code).subscribe(data => {
        this.opinions3 = [data];

        if (this.sites2.length > 1) {
          this.site = this.sites2[1];
          this.opinionService.getOpinions2(this.transReq, this.sites2[1], this.selectedMax.code).subscribe(data => {
            this.opinions3 = [...this.opinions3, ...[data]];

            if (this.sites2.length == 2) {
              this.opi = this.opinions3;
              this.isCompleted = false;
              this.d = true;
              this.Download();
              this.selectedCategories = this.categories.slice(0,2);
              this.SentimentComment();
            }

            if (this.sites2.length > 2) {
              this.site = this.sites2[2];
              this.opinionService.getOpinions2(this.transReq, this.sites2[2], this.selectedMax.code).subscribe(data => {
                this.opinions3 = [...this.opinions3, ...[data]];

                if (this.sites2.length == 3) {
                  this.opi = this.opinions3;
                  this.isCompleted = false;
                  this.d = true;
                  this.Download();
                  this.selectedCategories = this.categories.slice(0,2);
                  this.SentimentComment();
                }
                if (this.sites2.length > 3) {
                  this.site = this.sites2[3];
                  this.opinionService.getOpinions2(this.transReq, this.sites2[3], this.selectedMax.code).subscribe(data => {
                    this.opinions3 = [...this.opinions3, ...[data]];

                    this.opi = this.opinions3;
                    this.isCompleted = false;
                    this.d = true;
                    this.Download();
                    this.selectedCategories = this.categories.slice(0,2);
                    this.SentimentComment();
                  });
                }

              });
            }
          });
        }

        if (this.sites2.length == 1) {
          this.opi = this.opinions3;
          this.isCompleted = false;
          this.d = true;
          this.Download();
          this.selectedCategories = this.categories.slice(0,2);
          this.SentimentComment();
        }
      });
    }
    window.scrollTo(0, document.body.scrollHeight);  
  }

  Download() {
    this.opinionService.downloadOpinions(this.opi, this.transReq).subscribe(data => {
      console.log(data);
    }
    );
  }

  SentimentComment(){
    this.ss=false;
    this.ispol=true;
    this.opinionService.calculateScores(this.opi).subscribe(data => {
      console.log("yes2");
      this.scores=data;
      console.log(data);
      this.opinionService.sentimentOpinion(this.opi).subscribe(data => {
        console.log("yes2");
        this.opi=data;
        this.s=true;
        console.log(data);
        this.ispol=false;
        this.SentimentComments();
      }
      );
    }
    );    
  }
   

  SentimentComments(){
    this.selectedCategories = this.categories.slice(0,2);
    this.opinionService.sentimentOpinions().subscribe(data => {
      this.polarity = data;
      this.selectedCategories = this.categories.slice(0,3);
    }
    );
  }

  SummaryComments(){
    this.selectedCategories = this.categories.slice(0,3);
    this.isSum=true;
    this.opinionService.summaryOpinions(this.opi,this.polarity,this.transReq).subscribe(data => {
      this.summary = data;
      this.isSum=false;
      this.translateE();
    }
    );
  }

  translateE() {
    this.transReq2 = "";
    this.requestService.translateRequest(this.summary,"en").subscribe(data => {
      this.transReq2 = data;
      this.selectedCategories = this.categories.slice(0,4);
    });
  }
  

}
