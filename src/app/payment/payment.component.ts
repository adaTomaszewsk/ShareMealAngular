import { FlightSearchService } from './../services/flight-search.service';
import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

export class PaymentComponent implements OnInit {

  constructor(public flightSearchService: FlightSearchService, public dictionary: DictionaryService) { }

  ngOnInit() {
  }

}
