class GitHub {
  constructor() {
    this.client_id = '5f05ccb4fe9fb18309e4';
    this.client_secret = '4883cddc0ca256e06a5898d8782be47df290d158';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}