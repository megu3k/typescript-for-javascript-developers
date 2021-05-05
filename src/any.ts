import axios from 'axios';
export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';



// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    interface Article {
      id:number;
      title: string;
      description: string;
    }
    let data: Article[] = response.data;
    data =[ {
      id: 1,
      title :'aaa',
      description : 'This is aaa'
    }];
    console.log(data);
  });