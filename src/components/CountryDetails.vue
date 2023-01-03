<template>
    <!-- Country Details (Bootstrap column) -->
    <!-- <div class="col-7"> -->
    <div :v-if="country" >
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 150px"/>
            <h1>{{country.name.common}}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{ country.capital[0] }}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{ country.area }}<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li v-for="(borderAlpha3Code, index) in country.borders" :key="index">
                        <router-link :to="`/list/${borderAlpha3Code}`">
                          {{ borderAlpha3Code }}
                        </router-link>
                      </li>
                      <!-- <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li> -->
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- <img src="https://restcountries.eu/data/fra.svg" alt="country flag" style="width: 300px"/>
            <h1>France</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table> -->
    </div>
</template>
  
<script>
  export default {
  data(){
    return {
      country: {}
    }
  },
  watch: {
    '$route.params.alpha3Code': {
        async handler() {
          if (this.$route.params.alpha3Code) {
            const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${this.$route.params.alpha3Code.toUpperCase()}`);
            const country = await response.json();
            this.country = country;
          }
        },
        immediate: true
      }
  }

}
</script>
  
<style>
  
</style>