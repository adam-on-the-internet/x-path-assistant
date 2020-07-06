import {Component, OnInit} from "@angular/core";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  year: any;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  ngOnInit() {
    this.year = new Date().getFullYear();
  }
}
