<template>
  <div>
    <div>
      <div class="form-group">
        <div class="input-group">
          <label class="col-form-label mb" for="inputDefault">Search Beers By Name:</label>
          <input type="text" class="form-control" placeholder="Beer Name" id="seach" v-model="name">
          <button type="button" class="btn btn-outline-warning input-group-append" v-on:click="getBeersByName">Search</button>
        </div>
      </div>
    </div>

      <div class="card border-info mb-3" style="max-width: 20rem;" v-for="beer in beers" :key="beer.id">
        <div class="card-header">
          <h4 class="card-title">{{ beer.name }}</h4>
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ beer.description }}
          </p>

          <hr class="border-info"/>

          <p class="card-text">
            <strong>Date First Brewed:</strong> {{ beer.first_brewed}}
          </p>

          <hr class="border-info"/>

          <div>
            <h5 class="card-title">Food Parings:</h5>
            <ul class="list-group">
             <li class="list-group-item" v-for="food_pair in beer.food_pairing" :key="food_pair">
               {{ food_pair }}
             </li>
           </ul>
         </div>
        </div>
      </div>
  </div>
</template>

<script>
const API_URL = "http://localhost:4000/";

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    error: "",
    name: "",
    beers: []
  }),
  mounted() {
    fetch(API_URL + 'beers')
      .then(response => response.json())
      .then(result => {
        this.beers = result;
      });
  },
  methods: {
    getBeersByName: function() {
      console.log(this.name);
      fetch(API_URL + 'search/' + this.name )
        .then(response => response.json())
        .then(result => {
          this.beers = result;
        });
    }
  }
}
</script>

<style>

</style>
