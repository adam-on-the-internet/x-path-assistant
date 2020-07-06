import { Component } from "@angular/core";

import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  faHandsHelping = faHandsHelping;
  faGithub = faGithub;
}
