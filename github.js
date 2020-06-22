class Github {
    constructor() {
        this.client_id = "1e3706570d27185da336";
        this.client_secret = "55bae5a7713d21adb9836f849d5c0fb2f6652227";
        this.repos_count = 5;
        this.repos_sort = "created: asc"
    }
    async getUser(users) {
        const responseProfile = await fetch(`https://api.github.com/users/${users}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${users}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await responseProfile.json();

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }

    }

}