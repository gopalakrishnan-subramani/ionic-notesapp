import {Pipe, PipeTransform} from "@angular/core";

@Pipe( {
    name: "SUMMARY"
})

export class SummaryPipe implements PipeTransform {

      //FIXME: args is not set to array by default, need to check doc
  //or report bug to angular

   // transform(input: string, args: any[]) {
       transform(input: string, length) { 
        
        console.log(input, length);



        if (length > 0) {
            return input.substr(0, length);
        }

        return input;
    }
}