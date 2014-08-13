

function IndexCtrl($scope){
    $scope.total_vars = 2;
    $scope.total_rests = 2;
    $scope.problem_type = 'max';

    $scope.setup = function(){
        var obj_coefs = [];
        for (var i=1; i <= $scope.total_vars; i++){
            obj_coefs.push({value: 0.0, name: "X" + i.toString()});
        }
        $scope.obj_coefs = obj_coefs;

        var obj_rests = [];

        for (var i=1; i <= $scope.total_rests; i++){
            var rest = {
                rhs: 0,
                type: "leq", 
                name: "R" + i.toString(), 
                obj_coefs: [],
                shadow_coefs: []
            };

            for (var j=1; j <= $scope.total_vars; j++){
                rest.obj_coefs.push({value: 0.0, name: "X" + j.toString()});       
            }

            for (var j=1; j <= $scope.total_rests; j++){
                rest.shadow_coefs.push({value: 0.0, name: "S" + j.toString()});
            }

            rest.shadow_coefs[i - 1]['value'] = 1.0;
            obj_rests.push(rest);
        }

        $scope.obj_rests = obj_rests;

    };

    
}

