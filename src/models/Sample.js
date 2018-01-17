elApp.factory('SampleModel', function () {
    return {
        fetchRecords: function () {
            return new Promise(function (resolve, reject) {
                try {
                    db.query('SELECT * from your-table', function (error, results, fields) {
                        if (error) reject(error);
                        resolve(results);
                    });
                } catch (e) {
                    reject(e);
                }
            });
        },
        dummyPara: function () {
            return new Promise(function (resolve, reject) {
                try {
                    setTimeout(function () {
                        resolve("Dummy paragraph");
                    }, 2000);
                } catch (e) { reject(e); }
            });
        }
    }
});