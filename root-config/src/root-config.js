import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@react-mf/navbar",
  () => System.import("@react-mf/navbar"),
  isActive.navbar
);

registerApplication(
  "@react-mf/ships",
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => {
        resolve(System.import("@react-mf/ships"));
      }, 150)
    ),
  isActive.ships
);

start();
