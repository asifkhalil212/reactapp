import React from 'react';


  componentDidMount() {
    //fetch data
    var form = new FormData();
    form.append("grant_type", "client_credentials");
    form.append("client_id", "2173cfbe-5dde-4dbe-9713-e6e5550a14a1@db05faca-c82a-4b9d-b9c5-0f64b6755421");
    form.append("client_secret", "SKUOeqA1qADcSLS4iKdy3SBZIUFV5IkV796kUjKyzIg=");
    form.append("resource", "00000003-0000-0ff1-ce00-000000000000/uhgazure.sharepoint.com@db05faca-c82a-4b9d-b9c5-0f64b6755421");
    
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://uhgazure.sharepoint.com/sites/OptumCommercial/raghav/_api/web/lists/getbytitle%28%27Triple-S%27%29/items",
    "method": "GET",
    "headers": {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvdWhnYXp1cmUuc2hhcmVwb2ludC5jb21AZGIwNWZhY2EtYzgyYS00YjlkLWI5YzUtMGY2NGI2NzU1NDIxIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQGRiMDVmYWNhLWM4MmEtNGI5ZC1iOWM1LTBmNjRiNjc1NTQyMSIsImlhdCI6MTYwMjc1MTMyMCwibmJmIjoxNjAyNzUxMzIwLCJleHAiOjE2MDI4MzgwMjAsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBAZGIwNWZhY2EtYzgyYS00YjlkLWI5YzUtMGY2NGI2NzU1NDIxIiwibmFtZWlkIjoiMjE3M2NmYmUtNWRkZS00ZGJlLTk3MTMtZTZlNTU1MGExNGExQGRiMDVmYWNhLWM4MmEtNGI5ZC1iOWM1LTBmNjRiNjc1NTQyMSIsIm9pZCI6Ijk4N2FkZGMyLWE1ZTctNGE0ZS04YzQwLTFkMjJiYWFkMzZiNSIsInN1YiI6Ijk4N2FkZGMyLWE1ZTctNGE0ZS04YzQwLTFkMjJiYWFkMzZiNSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.rn98igbrzQR9oqElhGTdTP-zCROZB0IsYAxsmM3ZpnzPSNP6776GOR-pXlfMv6MGGXzRBw-2h4hEV4tuNCgSVvC42DqhTrQ-tkfD7Sgbn10ljasFgMOkcEtEFxDcInJtxUjRDogN7IBbwVL-AL6AjPZjWRTkmYIT0J4LhAutzbbC_NrH7TpcbD52b7CuOXRXwaXMgMdyrGfYGrXJASKx1ThS3IcEDycA78TGoICvbGi3-mmVl9KTeLzlMCbEDjfCnZRds4Kyz5wnhoSBh4QM2zJMCxOLrasoBPY5_lWcXBdw3sDN13ECnZmpHnwIT3HSLOAne-YujHC2LvE1igHXCw",
    "Accept": "application/json;odata=verbose",
    "User-Agent": "PostmanRuntime/7.16.3",
    "Cache-Control": "no-cache",
    "Postman-Token": "adb43b05-b5df-41a7-95d7-910402a28e5d,8747d30c-1aa6-43f2-9550-0e1bc79a1f2e",
    "Host": "uhgazure.sharepoint.com",
    "Content-Type": "multipart/form-data; boundary=--------------------------814856045908619534522472",
    "Accept-Encoding": "gzip, deflate",
    "Content-Length": "724",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
    },
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": form
    }
    
    $.ajax(settings).done(function (response) {
    console.log(response);
    });
  }

  movieClicked = movie => {
    console.log(movie);
  }

  render() {
    return (
      <div className="Movie" >
        
      </div>
    );
  }
}
