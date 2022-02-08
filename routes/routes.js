module.exports = function(server){
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, h) {
            var data = {
                message: 'API calculator'
            };
            return data;
        }
    });
    server.route({
        method: 'GET',
        path: '/calculator/sum/{num1}+{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 + num2
            };
            return data;
        }
    });
    server.route({
        method: 'GET',
        path: '/calculator/sub/{num1}-{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 - num2
            };
    
            return data;
        }
    });
    //Multiplication
    server.route({
        method: 'GET',
        path: '/calculator/multi/{num1}*{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 * num2
            };
    
            return data;
        }
    });
    //Division
    server.route({
        method: 'GET',
        path: '/calculator/div/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: num1 / num2
            };
    
            return data;
        }
    });
}