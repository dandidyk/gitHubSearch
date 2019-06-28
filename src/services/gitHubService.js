export default class GitHubService {

  _apiBase = "https://api.github.com";

  getResource = async (url, method, body) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };


  // getOrganizations = async (org) => {
  //   let result = []

  //   // let { total_count } = await this.getResource(`/search/users?q=${org}+type:org/&per_page=1`, "GET");

  //   // console.log(total_count%100);

  //   // only firsr 1000 result are avaliable   

  //   for (let i = 10 ; i > 0; i--) {
  //     const { items } = await this.getResource(`/search/users?q=${org}+type:org/&per_page=100&page=${i}`, "GET");
  //     const organizations = items.filter(({ type }) => type === "Organization")

  //     console.log(i);

  //     result = [...result, ...organizations]

  //   }

  //   console.log(result);

  //   return result
  // }

    getOrganizations = async (org) => {
  
      const { items } = await this.getResource(`/search/users?q=${org}+type:org/&per_page=100`, "GET");
      const organizations = items.filter(({ type }) => type === "Organization")


      return  organizations

  }

  getOrganization = async (org) => await this.getResource(`/orgs/${org}`, "GET");

  getOrganizationss = async () => await this.getResource(`/organizations?since=135`, "GET");

  getListOfMembers = async (org) => await this.getResource(`/orgs/${org}/members`, "GET");
}
