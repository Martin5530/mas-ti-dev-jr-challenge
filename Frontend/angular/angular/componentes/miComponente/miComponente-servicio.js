// mi componente - servicio
app.factory("miComponenteServicio", ['$http', '$q', 'urls', function($http, $q, urls)
{
    return{
        obtieneLista : function(){
            return $http({
                url: urls.servidor,
                method: "GET",
            }).then(function(response){                
                return response.data;
            }, function(response){
                return $q.reject(response);
            });
        }
    }
}]);
