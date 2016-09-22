import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <div class="jumbotron">
        <div class="container">
            <div class="col-sm-8 col-sm-offset-2">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
    `
})

export class AppComponent { }
