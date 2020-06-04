import { Injectable } from '@angular/core';
@Injectable()
export class FileDownloadHelperService {

    getURLToBlob(url: string) {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                }
            };
            xhr.send();
        });
    }

    saveAsBlob(blob: any, filename: string) {
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, filename);
        } else {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            // link.click();
            // window.URL.revokeObjectURL(link.href);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    downloadByURL(url, filename) {
        this.getURLToBlob(url).then(blob => {
            this.saveAsBlob(blob, filename);
        });
    }

    getFileMD5(fileItem: any, appData: any, func: Function, that: any) {
        let _window = window as any;
        let blobSlice = _window.File.prototype.mozSlice || _window.File.prototype.webkitSlice || _window.File.prototype.slice;
        let spark = new _window.SparkMD5.ArrayBuffer();
        let fileName = fileItem._file.name;
        let fileSize = fileItem._file.size;
        let currentChunk: any = 0;
        let chunkSize = 2097152;
        let chunks = Math.ceil(fileSize / chunkSize);
        let fileReader = new FileReader();
        let md5: any;

        function loadNext() {
            let start = currentChunk * chunkSize,
                end = ((start + chunkSize) >= fileSize) ? fileSize : start + chunkSize;
            fileReader.readAsArrayBuffer(blobSlice.call(fileItem._file, start, end));
        }

        loadNext();

        fileReader.onload = function (ee: any) {
            spark.append(ee.target.result);
            currentChunk++;
            if (currentChunk < chunks) {
                loadNext();
            } else {
                md5 = spark.end();
                func(md5, appData, fileItem, that);
            }
        };
    }

}


