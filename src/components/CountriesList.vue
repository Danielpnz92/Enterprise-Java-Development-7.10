<template>

    <!-- Bootstrap container wrapper div -->
  <div :v-if="countries" >
    
      <div class="container">

        <!-- Bootstrap row wrapper div -->
        <div class="row">
          <!-- Countries List (Bootstrap column) -->
          <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group">
              <router-link v-for="(country, index) in countries" :key="country.name" class="list-group-item list-group-item-action d-flex flex-column justify-content-center align-items-center" :to="`/list/${country.alpha3Code}`">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"  />
                <p>{{country.name.common}}</p>
                <!-- <router-link :to="``"></router-link> -->
              </router-link>
<!-- 
              <a class="list-group-item list-group-item-action" href="/ABW">
                <img src="https://flagpedia.net/data/flags/icon/72x54/aw.png" />
                <p>Aruba</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/AFG">
                <img src="https://flagpedia.net/data/flags/icon/72x54/af.png" />
                <p>Afghanistan</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/AGO">
                <img src="https://flagpedia.net/data/flags/icon/72x54/ao.png" />
                <p>Angola</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/AIA">
                <img src="https://flagpedia.net/data/flags/icon/72x54/ai.png" />
                <p>Anguilla</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/ALA">
                <img src="https://flagpedia.net/data/flags/icon/72x54/ax.png" />
                <p>Åland Islands</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/ALB">
                <img src="https://flagpedia.net/data/flags/icon/72x54/al.png" />
                <p>Albania</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/AND">
                <img src="https://flagpedia.net/data/flags/icon/72x54/ad.png" />
                <p>Andorra</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/ARE">
                <img src="https://flagpedia.net/data/flags/icon/72x54/ae.png" />
                <p>United Arab Emirates</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/ARG">
                <img src="https://flagpedia.net/data/flags/icon/72x54/ar.png" />
                <p>Argentina</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/ARM">
                <img src="https://flagpedia.net/data/flags/icon/72x54/am.png" />
                <p>Armenia</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/ASM">
                <img src="https://flagpedia.net/data/flags/icon/72x54/as.png" />
                <p>American Samoa</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/ATA">
                <img src="https://flagpedia.net/data/flags/icon/72x54/aq.png" />
                <p>Antarctica</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/FLK">
                <img src="https://flagpedia.net/data/flags/icon/72x54/fk.png" />
                <p>Falkland Islands</p>
              </a>
              <a class="list-group-item list-group-item-action active" href="/FRA">
                <img src="https://flagpedia.net/data/flags/icon/72x54/fr.png" />
                <p>France</p>
              </a>
              <a class="list-group-item list-group-item-action" href="/ZWE">
                <img src="https://flagpedia.net/data/flags/icon/72x54/zw.png" />
                <p>Zimbabwe</p>
              </a> -->
            </div>
          </div>
          <div class="col-7">
            <router-view />
          </div>
        </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return {
      countries: []
    }
  },
  async created(){
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries')
    this.countries = await response.json()
  }
}
  
</script>
  
<style>
  
</style>