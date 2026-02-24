import {Component, Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "star",
})

export class StarPipe implements PipeTransform {
    transform(value: number | undefined): string {
        if(!value) return "";
        let result = ""
        for(let i: number = 0; i < value; i++) {
            result += "<img src='../../../../public/assets/star-16.png'/>"
        }
        return result;
    }
}
