import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
    selector: 'app-detection-qrcode',
    templateUrl: './detection-qrcode.component.html',
    styleUrls: ['./detection-qrcode.component.css']
})

export class DetectionQrcodeComponent implements OnInit {

    constructor(
        private storage: StorageService
    ) { }

    qrcode: boolean = false;

    list=[
        {name: 'Todos', code:'modelo_00'},
        {name: 'Dedo de Deus', code:'modelo_01'},
        {name: 'Monumento Olímpico', code:'modelo_02'}
    ]
    select: string = '';

    ngOnInit(): void {
        if(localStorage.getItem('check_termo') == null || localStorage.getItem('check_termo') == 'false'){
            localStorage.setItem('check_termo', 'false')
            this.qrcode = false;
        }
        else{
            this.qrcode = true;
        }
        let code = localStorage.getItem('code')
        this.select = code != null ? code : this.list[0].code;
        // console.log(this.select)
    }

    checkTermo(){
        localStorage.setItem('check_termo', 'true')
        this.qrcode = true;
    }

    selectModelo(item){
        this.select = item
        localStorage.setItem('code', item)
    }

    afterChange(e) {
        console.log('afterChange');
    }
    
    beforeChange(e) {
        console.log('beforeChange');
    }

    slideConfig = {  
        "slidesToShow": 3,  
        "slidesToScroll": 1,  
        "dots": false,
        "arrows": true,  
        "infinite": true,
        "autoplay": true,
        "swipeToSlide": true,
        "autoplaySpeed": 5000,
        "lazyLoad": 'ondemand',
        "responsive": 
        [{
            "breakpoint": 600,
            "settings": {
                "slidesToShow": 2, 
            }
        },
        {
            "breakpoint": 370,
            "settings": {
                "slidesToShow": 1, 
            }
        }]
    }; 

}
