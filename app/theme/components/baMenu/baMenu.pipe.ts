
import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'menuSearchFilter'
})

export class MenuFilterPipe {
    constructor() {
    }

    transform(dataArr, filter) {
        let results = [];
        if (typeof dataArr === "undefined") {
            return;
        }
        if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === "") {
            return dataArr;
        }
        ///youregexp/
        dataArr.forEach((row) => {
            if (row.title.toLowerCase().indexOf(filter) >= 0) {
                results.push(row);
            }
        });
        return results;
    }
}