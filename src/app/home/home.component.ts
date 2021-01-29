import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    structor() { }

    urlVideo;

    array_list = [
        {id: 0, name: 'Mulher Maravilha',           img: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/143798588_235663874692885_8086791601657733990_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_eui2=AeEjT2_dR6JAo0P3FCnBVqIm7yhjPJn0HlbvKGM8mfQeViK39O4Pn0r_CBFGW3GXqhd1dhONpO3L34wCTMRIVYAV&_nc_ohc=bL2UOU9d14EAX_TzyF5&_nc_ht=scontent-gig2-1.xx&oh=ae8e7da8943d268212bc2af1e64c268b&oe=6038F953', url: 'https://mega.nz/embed/MmI3XIZR#VwgjLdG9pkvJ89ucIvr-etpOj4CDp3EiWXMlIf1ifFs'},
        {id: 1, name: 'Vingadores Guerra infinita', img: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/144515970_235663898026216_6160473327564997815_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_eui2=AeFBjbau6EK2nhvaaa1wilTdLPg2eN79SRIs-DZ43v1JEuGF0lCmA06gfk6HEaXexh8tURzQHhR14v3clEs3iLBV&_nc_ohc=U0v4QfUs54kAX-0JhQd&_nc_ht=scontent-gig2-1.xx&oh=7dbcddd52105a8d39c30e0eb9e375ba8&oe=6039CEE2', url: 'https://mega.nz/embed/A7JQAbyJ#Vb1PS6fsMhxABFQXWRLVpxR7Kv_5GFDy40u7eGycFTw'},
        {id: 2, name: 'Vingadores Ultimato',        img: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/144262844_235663988026207_5707561492419050200_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_eui2=AeF-1o4lmJcoF7yYv17J8_AiBwtAEaUcLpQHC0ARpRwulOj7XI-JLMyiMqzeFwH-so11Pcp-dWSjVkj-_VHPaP8M&_nc_ohc=rt9wOPM8sa8AX8EAgE3&_nc_ht=scontent-gig2-1.xx&oh=8869bee92f198b6f7ccda99c159117dc&oe=6039F745', url: ''},
        {id: 3, name: 'Vidro',                      img: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/143812177_235663878026218_681693663208224637_n.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_eui2=AeEo5R4r65mesXB6SX_tFHOtVCcn-GjDxBJUJyf4aMPEEoaIQ5bc9zte9nFBcP-W6bwXAMObbQUu-lA1eq80cQm5&_nc_ohc=gbMI2_VULIMAX8C8J1G&_nc_ht=scontent-gig2-1.xx&oh=166767fae377e82c31dde97bd57e37cd&oe=6037C234', url: ''},
    ];

    ngOnInit(): void {
        setTimeout(function(){
            document.getElementById('loading').style.display="none";
        }, 3200);
    }

}

