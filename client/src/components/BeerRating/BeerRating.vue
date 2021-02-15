<template>
  <div class="rating">
    <ul class="list">
      <li @click="rate(star, beerID)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
        <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Rating',
  props: ['grade', 'maxStars', 'hasCounter', 'beerId'],
  data() {
    return {
      stars: this.grade,
      beerID: this.beerId
    }
  },
  methods: {
    rate(star, beerID) {
      if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star
      }
    }
  },
}
</script>

<style scoped lang="css">
.rating {
  padding: 5px;
  color: #b7b7b7;
}

.rating .list {
  padding: 0;
  margin: 0 20px 0 20px;
}

.rating .list:hover .star {
  color: #ffe100;
}

.rating .list .star {
  display: inline-block;
  font-size: 25px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.rating .list .star:hover ~ .star:not(.active) {
  color: inherit;
}

.rating .list .star:first-child {
  margin-left: 0;
}

.rating .list .star.active {
  color: #ffe100;
}
</style>
