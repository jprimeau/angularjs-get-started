(function() {

  var module = angular.module('githubViewer');

  var RepoController = function($scope, github, $routeParams) {

    var onRepo = function(data) {
      $scope.repo = data;
    }

    var onContributors = function(data) {
      $scope.contributors = data;
    }

    var onError = function(err) {
      $scope.error = 'Could not fetch the data.';
    }

    var username = $routeParams.username;
    var reponame = $routeParams.reponame;

    github.getRepo(username, reponame).then(onRepo, onError);
    github.getContributors(username, reponame).then(onContributors, onError);
  }

  module.controller('RepoController', ['$scope', 'github', '$routeParams', RepoController]);
}());