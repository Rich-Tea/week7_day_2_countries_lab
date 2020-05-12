import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
      el: '#app',
      data: {
          countries: [],
          faveCountries: [],
          selectedIndex: null
      },
      methods: {
          fetchCountries: function () {
              fetch('https://restcountries.eu/rest/v2/all')
                .then(response => response.json())
                .then(data => this.countries = data)
                .catch(error => console.log(error))
          },
      },
      mounted: function () {
          this.fetchCountries();
      }
  })
})