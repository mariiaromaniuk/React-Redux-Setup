import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("question", { path: "/question/:id" }, function() {
    this.route("question");
  });
  this.route('score-card');
});

export default Router;
