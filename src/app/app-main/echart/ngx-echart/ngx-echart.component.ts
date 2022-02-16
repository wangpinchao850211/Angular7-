import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-ngx-echart',
  templateUrl: './ngx-echart.component.html',
  styleUrls: ['./ngx-echart.component.scss']
})
export class NgxEchartComponent implements OnInit {

  public echartInstance: any;
  public echartInstanceTwo: any;
  width = '100%';
  constructor() { }

  ngOnInit() {
  }

  changeWidth(ev: Event) {
    this.width = this.width === '100%' ? '80%' : '100%';
  }
  echartsInstance(ev) {
    this.echartInstance = ev;
  }
  echartsInstanceTwo(ev) {
    this.echartInstanceTwo = ev;
  }

  // downLoadPDF
  downLoadPDF() {
    const option = {
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts:true,
      floatPrecision: 16 // or "smart", default is 16
    }
    let doc = new jsPDF('p', 'mm', 'a4');
    // 1、html渲染打印
    // doc.html(document.getElementById("echart"), 
    // {
		// 	callback: function (pdf) {
    //     doc.save("obrz.pdf");
		// 	}
		// });

    // doc.setDocumentProperties({ // Adds a properties to the PDF document.
    //   title: 'Title',
    //   subject: 'This is the subject',		
    //   author: 'James Hall',
    //   keywords: 'generated, javascript, web 2.0, ajax',
    //   creator: 'MEEE'
    // });

    // 2、
    doc.text('Hello world!', 20, 20);
    doc.setTextColor(100);
    doc.setFont("courier");
    doc.text('This is different font.',20, 30);

    doc.setTextColor(150);
    doc.setFont("times", "italic", 400);
    doc.text('This is times italic.', 20, 40);

    doc.setTextColor(255,0,0);
    doc.setFont("helvetica", "bold");
    doc.text('This is helvetica bold.', 20, 50);

    doc.setTextColor(0,255,0);
    doc.setFont("courier", "bolditalic");
    doc.text('This is courier bolditalic.', 20, 60);

    doc.setTextColor(0,0,255);
    doc.text('Do you like that?', 20, 68);

    //3、 rectangles squares
    doc.rect(20, 70, 10, 10); // empty square
    doc.rect(40, 70, 10, 10, 'F'); // filled square
    doc.setDrawColor(255,0,0);
    doc.rect(60, 70, 10, 10); // empty red square
      
    doc.setDrawColor(255,0,0);
    doc.rect(80, 70, 10, 10, 'FD'); // filled square with red borders
      
    doc.setDrawColor(0);
    doc.setFillColor(255,0,0);
    doc.rect(100, 70, 10, 10, 'F'); // filled red square
      
    doc.setDrawColor(0);
    doc.setFillColor(255,0,0);
    doc.rect(120, 70, 10, 10, 'FD'); // filled red square with black borders
    
    doc.addPage();
    //4、 lines
    doc.line(20, 20, 60, 20); // horizontal line
	
    doc.setLineWidth(0.5);
    doc.line(20, 25, 60, 25);
      
    doc.setLineWidth(1);
    doc.line(20, 30, 60, 30);
      
    doc.setLineWidth(1.5);
    doc.line(20, 35, 60, 35);
      
    doc.setDrawColor(255,0,0); // draw red lines
      
    doc.setLineWidth(0.1);
    doc.line(100, 20, 100, 60); // vertical line
      
    doc.setLineWidth(0.5);
    doc.line(105, 20, 105, 60);
      
    doc.setLineWidth(1);
    doc.line(110, 20, 110, 60);
      
    doc.setLineWidth(1.5);
    doc.line(115, 20, 115, 60);

    //5、 circle and ellipses
    doc.ellipse(40, 50, 10, 5);
    doc.setFillColor(0,0,255);
    doc.ellipse(80, 50, 10, 5, 'F');
      
    doc.setLineWidth(1);
    doc.setDrawColor(0);
    doc.setFillColor(255,0,0);
    doc.circle(120, 50, 5, 'FD');

    //6、 triangles
    doc.setLineWidth(1);
    doc.setDrawColor(255,0,0);
    doc.setFillColor(0,0,255);
    doc.triangle(100, 100, 110, 100, 120, 130, 'FD');

    // 7
    const name = prompt('What is your name?');
    let multiplier: any = prompt('Enter a number:');
    multiplier = parseInt(multiplier);
    doc.addPage();
    doc.setFontSize(22);	
    doc.text('Questions',20, 20);
    doc.setFontSize(16);
    doc.text('This belongs to: ' + name, 20, 30);
    for(var i = 1; i <= 12; i ++) {
      doc.text(i + ' x ' + multiplier + ' = ___', 20, 30 + (i * 10));
    }
    doc.addPage();
    doc.setFontSize(22);
    doc.text('Answers', 20, 20);
    doc.setFontSize(16);
    for(var i = 1; i <= 12; i ++) {
      doc.text(i + ' x ' + multiplier + ' = ' + (i * multiplier), 20, 30 + (i * 10));
    }
    
    // 8、image
    doc.addPage();
    doc.setFontSize(22);
    doc.text('image', 20, 20);

    const a = this.echartInstance.getDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff'
    });
    console.log(a);
    doc.addImage(a, 'JPEG', 10, 10, 120, 50);
  
    // Because of security restrictions, getImageFromUrl will
    // not load images from other domains.  Chrome has added
    // security restrictions that prevent it from loading images
    // when running local files.  Run with: chromium --allow-file-access-from-files --allow-file-access
    // to temporarily get around this issue.
    // const that = this;
    // var getImageFromUrl = function(url, callback) {
    //   var img = new Image, data, ret={data: null, pending: true};
      
    //   img.onerror = function() {
    //     throw new Error('Cannot load image: "'+url+'"');
    //   }
    //   img.onload = function() {
    //     var canvas = document.createElement('canvas');
    //     document.body.appendChild(canvas);
    //     canvas.width = img.width;
    //     canvas.height = img.height;

    //     var ctx = canvas.getContext('2d');
    //     ctx.drawImage(img, 0, 0);
    //     // Grab the image as a jpeg encoded in base64, but only the data
    //     data = canvas.toDataURL('image/jpeg').slice('data:image/jpeg;base64,'.length);
    //     // Convert the data to binary form
    //     data = atob(data)
    //     document.body.removeChild(canvas);

    //     ret['data'] = data;
    //     ret['pending'] = false;
    //     if (typeof callback === 'function') {
    //       callback(data);
    //     }
    //   }
    //   // img.src = url;
    //   img.src = that.echartsInstance.getDataURL({
    //       pixelRatio: 2,
    //       backgroundColor: '#fff'
    //   });

    //   return ret;
    // }

    // // Since images are loaded asyncronously, we must wait to create
    // // the pdf until we actually have the image data.
    // // If we already had the jpeg image binary data loaded into
    // // a string, we create the pdf without delay.
    // var createPDF = function(imgData) {
    //   doc.addImage(imgData, 'JPEG', 10, 10, 50, 50);
    //   doc.addImage(imgData, 'JPEG', 70, 10, 100, 120);

    //   // Output as Data URI
    //   doc.output('datauri');
    // }

    // getImageFromUrl('thinking-monkey.jpg', createPDF);

    // 9、table
    doc.addPage();
    doc.setFontSize(10);
    doc.text('table', 20, 20);
    const data = [
      { index:'1',id: 'Case Number', name : '101111111' },
      { index:'2',id: 'Patient Name', name : 'UAT DR' },
      { index:'3',id: 'Hospital Name', name: 'Dr Abcd' }
    ]
    console.log(Object.keys(data[0]));
    // return
    const headers = ['index', 'id', 'name'];
    const config = {
      printHeaders: true,
      margins: 5,
      fontSize: 12,
      // padding: 0,
      headerBackgroundColor: '#333',
      headerTextColor: 'red'
    };
    doc.table(10, 60, data, headers, config)
    
    const b = this.echartInstanceTwo.getDataURL({
        pixelRatio: 2,
        backgroundColor: '#fff'
    });
    doc.addImage(b, 'JPEG', 10, 10, 120, 50);
    // const headConfig = [];
    // doc.setTableHeaderRow(headConfig)
    // data.forEach((item, index) => {
    //   doc.cell(10, 10, 10, 5, `${item.name}`, index, 'center')
    // });

    //   doc.autoTable({
    //     body: [  //表格主体内容
    //         ["予約日時:", 'info.createDateStr'],
    //         ["部屋名:", 'info.startTime'],
    //         ["顧客コード:", 'info.customerCode',],
    //         ["会員番号:", 'info.customerCardNo',],
    //         ["名前:", 'info.customerKana',],
    //         ["電話番号:", 'info.homeTel',],
    //         ["年齢:", 'info.age',],
    //         ["施術部位:", 'bodyparts',],
    //         ["備考:", 'info.remark',],
    //         ["登録者:", 'info.creator',],
    //         ["登録日時:", 'info.createDateStr',],
    //         ["更新者:", 'info.updater',],
    //         ["更新日時:", 'info.updateDateStr',],
    //     ],
    //     //设置table的主题
    //     theme: "grid",
    //     //Y轴开始位置
    //     startY: 30,
    //     columnStyles: {
    //         0: { cellWidth: 150 },  //第一列的宽度
    //     },
    //     styles: {
    //         font: 'simhei',  //使用引入的字体
    //         fontSize: 14  //字体大小
    //     },
    //     pageBreak:'always'  //新表格是否新开一页
    // })
    // Output as Data URI
    // doc.output('datauri');
    doc.save("wpc_obrz.pdf");
  }
}
