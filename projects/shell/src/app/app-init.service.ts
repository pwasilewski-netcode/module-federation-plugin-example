import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take, tap } from "rxjs/operators";
import { PluginOptions, PluginService } from "plugin-lib";

@Injectable({ providedIn: 'root' })
export class AppInitService {
  constructor(private http: HttpClient, private pluginService: PluginService) { }

  init(): Observable<any> {
    return this.http.get<PluginOptions[]>('http://localhost:5001/assets/plugins.json')
      .pipe(take(1), tap(o => this.pluginService.init(o)));
  }
}
