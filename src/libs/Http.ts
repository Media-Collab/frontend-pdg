import { environment } from 'src/environments/environment';

class Http {
  static instance = new Http();
  baseUrl = 'https://apimocha.com/testpdg/';

  get = async (url: string) => {
    try {
      // let request = await fetch(this.baseUrl + url, {
      let request = await fetch(environment.api_url + url, {
        method: 'GET',
      });
      let json = request.json();

      return json;
    } catch (error: any) {
      console.log('Error', error);
      throw Error(error);
    }
  };

  post = async (url: string, body: any) => {
    try {
      let request = await fetch(this.baseUrl + url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body,
      });

      let json = request.json();

      return json;
    } catch (error: any) {
      console.log('Error', error);
      throw Error(error);
    }
  };

  put = async (url: string, body: any = null) => {
    try {
      let request = await fetch(this.baseUrl + url, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body,
      });

      let json = request.json();

      return json;
    } catch (error: any) {
      console.log('Error', error);
      throw Error(error);
    }
  };
}

export { Http };
