import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  urlVideo;

  ngOnInit(): void {
    this.urlVideo='https://r1---sn-gpv7enek.c.drive.google.com/videoplayback?expire=1611739313&ei=cfgQYML7NpmYhgbbzqHwCw&ip=168.0.36.0&cp=QVRGU0hfWFNPRFhPOlc5Y0R2NFRHUDZJSGg1VFQ4YXo2d1hCeUxpRnZWU2tkdXctTUlwVDhCZVg&id=689d19f4fa668506&itag=18&source=webdrive&requiressl=yes&mh=NR&mm=32&mn=sn-gpv7enek&ms=su&mv=u&mvi=1&pl=24&sc=yes&ttl=transient&susc=dr&driveid=1MfI4vAfX6YDX5_m-PsJKHxT0EWHKv6Hv&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=46.718&lmt=1611027966603406&mt=1611724528&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhALul5o4q1B79KO-ARJVDBH7HYpMMY8txyH8eTtV1Z-9MAiEAz9FtdDKFPOZK5ygfmlAqOKu-RPc2oLlLLYeVswPc6NM=&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIgKaMaMx6eZkeIjc-hfvZ9bOjOSTEbOCAYHDyZUGyq8TECIQCAsH1WHOoC44sex_6UIIWuF2soYXK1r8xNGhFmElCWLA==&cpn=fCqEDHx0T9XdGykf&c=WEB_EMBEDDED_PLAYER&cver=20210126';
  }

}
