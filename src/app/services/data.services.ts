//Mise  en place du service qui recupere l'observable DataModel

import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Component, OnInit, Input } from '@angular/core'


import {DataModel} from '../models/data.model'


@Injectable()

export class DataService {
    data: Observable<DataModel[]>;

    constructor(private http: HttpClient) {

        this.data = this.http.get<DataModel[]>('../assets/data.json')
        
    }
}