import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class PouchDBService {
  localCardDB;
  remoteCardDB;

  constructor() {
    this.remoteCardDB = new PouchDB('http://162.243.166.217:5984/cards');
    this.localCardDB = new PouchDB('cards');
    this.remoteCardDB.info().then((info) => console.info(info));
    this.localCardDB.info().then((info) => console.info(info));

    this.remoteCardDB.replicate.to(this.localCardDB, {live:true});
  }



}
