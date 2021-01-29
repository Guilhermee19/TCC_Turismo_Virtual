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
        {id: 0, name: 'Mulher Maravilha',    img: 'https://previews.dropbox.com/p/thumb/ABAWPWynaYOmmb8fJ5czWFi1RepnYAXYUy_iImveG1K642GVpfAIg-RyprdJiHzWnchlzlIAEI4KBBAU8gXB9z0sX6Lc4FTdOfgvwSBMZ1IBI2vutS2qOMhx16HgPdppN60gRZRmSzzejw064-OzEkl3CCHG631BTwkGTcLF4xV6VifXSbEL0hDTo7wryuQsyZItyB6rp14ef2Q94zQ5lNsmQnvApXRc4XZauHhCdgJJYMMIZnZ3aTZP4VMOrSlu87UV8lO8VNLGsuwcVoGFdXjVL0MhF4dFyuBg-pQkX4JV_jKA6c9vPxmOQPHYP-E-M6WB3VaCusYZIVsLrUui1Dr7nz-ri1ODoUokxCCR6CTDuw/p.jpeg?fv_content=true&size_mode=5', url: 'https://mega.nz/embed/MmI3XIZR#VwgjLdG9pkvJ89ucIvr-etpOj4CDp3EiWXMlIf1ifFs'},
        {id: 1, name: 'Vingadores Guerra infinita', img: 'https://previews.dropbox.com/p/thumb/ABAkyR5hQY05xjyrK37t9pjSQLv4b51rOA970AuN48TST5St46Gbk7wOr92At2ih0cqdDjX9Rcu-k-7INaJhvGFTtEd1lA7MEdqPVriuaL-4FJccIFnXFFaNegiv1h_qPxfM_i3IEvFP43_fLMiN_ewTTyw5wOQ4HxT2P7UCdL5N2pMwlegdJqqAohz6sVJfDblkxVePSf4NiWfNtPYl8u4WbXWD-C7YYIZkAlBikpYft9tRz-dQSeoYDAtFvpF8MnKMZi1eES1iDw8QiiLBIHx0u7hxdW8LA3AxdKiJ3Pac91GknzaJwvQSOgcBNV5CJOKHmNgWDB2khrulibOx9ixKy0V-t1kSJufz9a8D6lmpDA/p.jpeg?fv_content=true&size_mode=5', url: 'https://mega.nz/embed/A7JQAbyJ#Vb1PS6fsMhxABFQXWRLVpxR7Kv_5GFDy40u7eGycFTw'},
        {id: 2, name: 'Vingadores Ultimato', img: 'https://previews.dropbox.com/p/thumb/ABAHawzqvLsRR1rJg1z3gHC1HodFq0HgGAmOgZZzXwXomo-a1H1HTa6-LyFHs3xlKejpKYhA6bAqti61ST6H-faz0bE5x6YMpgJPmpM3K9r6ZvCoGbktnCCcpyTWXraYgPXMQMz79vbTJIc2NmOrqtWdjvm5d8bqOfnriMxhZUSDGBTwf6GO0OFNBh3v51tLVr1JwilXwLheaYQeEazERnGW2fjcGKalKNSKoIkNi_DgUeNRcDYgFfaEAiMrk7DkMdC_f9RWfnxHiURgfhU6nVFVbp2xxDALzJ1Qde969p9dOkwiih3UsQfPl03vB9KmtGSi91KmXl6sLFoiYs5g-7i3gGc9hDCqdUJFhQ7OqFmsvw/p.jpeg?fv_content=true&size_mode=5', url: ''},
        {id: 3, name: 'Vidro', img: 'https://previews.dropbox.com/p/thumb/ABAkLHhhAkLk0O4VJoJm5dzMMJJMfOWD2nYFBnTmaYEreRGq_0JM5cZD7-YQ1y-nrPl444suBrvEFln9v73N9Zsxy8S20dUqLNQ55Fl3FWOyUOkbCnLyfQlPCMw_Vo585v498-vp0YN7paeHb1TdFpkN7vlqwAovlJbJex2_bz_bUoqEJ01z4fyDAB2GpQqlNWsg9OU38TYWonCkRCqahbXcVLoD485DGbUy-BC3_Gdqnk0Rggxlsbv_k3-KTzlxi2bLrtff1qkdsstnSki7X0ugZ45r4XOFl8XtgwkIEzeNM4xpalPokbePXnu4Pubiw0n0n0FURyKCflOT4m5oLBGW-tIqxitOG8dnowyMjjpGow/p.jpeg?fv_content=true&size_mode=5', url: ''},
    ];

    ngOnInit(): void {
        setTimeout(function(){
            document.getElementById('loading').style.display="none";
        }, 3200);
    }

}

