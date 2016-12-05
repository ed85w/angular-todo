angular.module('UserService', [])  				//module name is UserService
	.factory('UserAPIService', function($http){	//service is called UserAPIService

		UserAPIService = {						//new object called UserAPIService
			callAPI: function(url, data) {		//method called callAPI (URL is URL called for API, data will be user object with username and password) 
				return $http.post(url, data);	// $http module allows us to make calls to the API
			}
		};
	return UserAPIService;
	})

angular.module('TodoService', [])
    .factory('TodoAPIService', function($http) {
        TodoAPIService = {
            getTodos: function(url, data, token) {
                var header = "Authorization: JWT " + token;
                return $http.get(url, {params:{"username": data}}, header); //double curly braces?
            },
            createTodo: function(url, data, token) {
                header = "Authorization: JWT " + token;
                return $http.post(url, data, header);
            },
            editTodo: function(url, data, token) {
                header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
            },
            deleteTodo: function(url, token) {
                header = "Authorization: JWT " + token;
                return $http.delete(url, token);
            }
        };
        return TodoAPIService;
    });